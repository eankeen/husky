#!/usr/bin/env deno --allow-all
// TODO(eankeen): allow-all
/* eslint-disable @typescript-eslint/no-var-requires */
// const pleaseUpgradeNode = require('please-upgrade-node')
// const pkg = require('../package.json')
import { ensure } from 'https://raw.githubusercontent.com/eankeen/ensure/master/mod.ts'

// Node version isn't supported, skip
// pleaseUpgradeNode(pkg, {
//   message(requiredVersion) {
//     return (
//       'Husky requires Node ' +
//       requiredVersion +
//       ' (runtime: ' +
//       process.version +
//       ')' +
//       ", can't run Git hook."
//     )
//   },
// })

ensure({
  denoVersion: '1.0.0'
})

// Node version is supported, continue
// require('../lib/runner/bin')
await import('../src/runner/bin')