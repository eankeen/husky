// import fs = require('fs')
import * as denoFs from 'https://deno.land/std@0.50.0/fs/mod.ts'
// import path = require('path')
import * as denoPath from 'https://deno.land/std/path/mod.ts'
import { getBanner } from './getBanner.ts'
import { readPkg } from '../read-pkg.ts'

const _dirname = denoPath.dirname(new URL(import.meta.url).pathname);

export function getMainScript(): string {
  // const pkg = readPkg(path.join(__dirname, '../..'))
  const pkg = readPkg(denoFs.join(_dirname, '../..'))

  // const mainScript = fs
  //   .readFileSync(path.join(__dirname, '../../sh/husky.sh'), 'utf-8')
  //   .replace('huskyVersion="0.0.0"', `huskyVersion="${pkg.version}"`)
  const mainScript = Deno
    .readTextFileSync(denoFs.join(_dirname, '../../sh/husky.sh'))
    .replace('huskyVersion="0.0.0"', `huskyVersion="${pkg.version}"`)

  return [getBanner(), '', mainScript].join('\n')
}

export function createMainScript(gitHooksDir: string): void {
  // fs.writeFileSync(path.join(gitHooksDir, 'husky.sh'), getMainScript(), 'utf-8')
  Deno.writeTextFileSync(denoPath.join(gitHooksDir, 'husky.sh'), getMainScript())
}

export function removeMainScript(gitHooksDir: string): void {
  // const filename = path.join(gitHooksDir, 'husky.sh')
  const filename = denoPath.join(gitHooksDir, 'husky.sh')
  // if (fs.existsSync(filename)) {
  if (denoFs.existsSync(filename)) {
    // fs.unlinkSync(filename)
    Deno.removeSync(filename)
  }
}
