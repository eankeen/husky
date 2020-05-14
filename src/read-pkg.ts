// import fs from 'fs'
// import path from 'path'
import * as denoPath from 'https://deno.land/std/path/mod.ts'
// import { PackageJson } from 'type-fest'
import type { PackageJson } from 'https://raw.githubusercontent.com/sindresorhus/type-fest/master/index.d.ts'

export function readPkg(dir: string): PackageJson {
  // const pkgFile = path.resolve(dir, 'package.json')
  const pkgFile = denoPath.resolve(dir, 'package.json')
  // const pkgStr = fs.readFileSync(pkgFile, 'utf-8')
  const pkgStr = Deno.readTextFileSync(pkgFile)
  return JSON.parse(pkgStr)
}
