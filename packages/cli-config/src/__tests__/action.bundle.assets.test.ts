import assert from 'assert';
import { promises as fs } from 'fs';
import { after, before, describe, it } from 'node:test';
import { tmpdir } from 'os';
import { join } from 'path';
import { pathToFileURL } from 'url';

import { Cotar, fsa, FsMemory, LogConfig } from '@basemaps/shared';

import { BundleAssetsCommand } from '../cli/action.bundle.assets.js';

describe('action.bundle.assets', () => {
  const fsMem = new FsMemory();
  const assetsRoot = fsa.toUrl('/basemaps-bundle-assets-test/');
  // The asset location intentionally has no trailing slash, if it does the leading slash is stripped by accident
  const assetsPath = new URL('assets', assetsRoot);
  const tmpDirs: string[] = [];

  const baseArgs = { verbose: false, extraVerbose: false, assets: assetsPath.href, output: '' };

  /** Run the bundle-assets command into a fresh temp directory and return the created cotar path */
  async function bundleAssets(): Promise<string> {
    const tmpDir = await fs.mkdtemp(join(tmpdir(), 'basemaps-bundle-assets-'));
    tmpDirs.push(tmpDir);

    await BundleAssetsCommand.handler({ ...baseArgs, output: join(tmpDir, 'assets.tar.co') });

    const cotarFile = (await fs.readdir(tmpDir)).find((f) => f.endsWith('.tar.co'));
    assert.ok(cotarFile, 'Created a cotar file');
    return join(tmpDir, cotarFile);
  }

  before(() => {
    fsa.register(assetsRoot.href, fsMem);
    LogConfig.get().level = 'silent';
  });

  after(async () => {
    for (const dir of tmpDirs) await fs.rm(dir, { recursive: true, force: true });
  });

  it('should bundle assets without a leading slash in their path', async () => {
    await fsMem.write(new URL('assets/sprites/topographic.json', assetsRoot), '{"name":"topographic"}');
    await fsMem.write(new URL('assets/fonts/fonts.json', assetsRoot), '{"Roboto Thin":{}}');
    await fsMem.write(new URL('assets/fonts/Roboto Thin/0-255.pbf', assetsRoot), 'font-data');

    const cotar = await Cotar.fromTar(fsa.source(pathToFileURL(await bundleAssets())));

    // The lambda-tiler requests assets without a leading slash, eg AssetProvider.get(url, 'sprites/topographic.json')
    assert.ok(await cotar.get('sprites/topographic.json'), 'sprites/topographic.json should be readable');
    assert.ok(await cotar.get('fonts/fonts.json'), 'fonts/fonts.json should be readable');
    assert.ok(await cotar.get('fonts/Roboto Thin/0-255.pbf'), 'fonts/Roboto Thin/0-255.pbf should be readable');
    // Nothing ever requests a leading slash, so it must not be part of the cotar
    assert.equal(await cotar.get('/sprites/topographic.json'), null);
  });
});
