// import fs = require('fs')
import * as denoFs from 'https://deno.land/std@0.50.0/fs/mod.ts'
// import path = require('path')
import * as denoPath from 'https://deno.land/std/path/mod.ts'
import { getBanner } from './getBanner.ts'

export function getLocalScript(
  pmName: string,
  relativeUserPkgDir: string
): string {
  return `${getBanner()}

packageManager=${pmName}
cd "${relativeUserPkgDir}"
`
}

export function createLocalScript(
  gitHooksDir: string,
  pmName: string,
  relativeUserPkgDir: string
): void {
  // fs.writeFileSync(
  //   path.join(gitHooksDir, 'husky.local.sh'),
  //   getLocalScript(pmName, relativeUserPkgDir),
  //   'utf-8'
  // )
  Deno.writeTextFileSync(
    denoPath.join(gitHooksDir, 'husky.local.sh'),
    getLocalScript(pmName, relativeUserPkgDir)
  )
}

export function removeLocalScript(gitHooksDir: string): void {
  // const filename = path.join(gitHooksDir, 'husky.local.sh')
  const filename = denoPath.join(gitHooksDir, 'husky.local.sh')
  // if (fs.existsSync(filename)) {
  if (denoFs.existsSync(filename)) {
    // fs.unlinkSync(filename)
    Deno.removeSync(filename)
  }
}
