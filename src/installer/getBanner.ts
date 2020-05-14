// import path = require('path')
// import * as denoPath from 'https://deno.land/std/path/mod.ts'
// import { readPkg } from '../read-pkg'

// const _dirname = denoPath.dirname(new URL(import.meta.url).pathname);

export function getBanner(): string {
  // const pkgHomepage = process.env.npm_package_homepage
  const pkgHomepage = Deno.env.get('npm_package_homepage')
  // const pkgDirectory = process.env.PWD
  const pkgDirectory = Deno.env.get('PWD')

  // TODO(eankeen): what to do
  // const { homepage: huskyHomepage, version: huskyVersion } = readPkg(
  //   // path.join(__dirname, '../..')
  //   denoPath.join(_dirname, '../..')
  // )
  const huskyHomepage = 'husky homepage'
  const huskyVersion = 'husky version'

  const createdAt = new Date().toLocaleString()
  return `# Created by Husky v${huskyVersion} (${huskyHomepage})
#   At: ${createdAt}
#   From: ${pkgDirectory} (${pkgHomepage})`
}
