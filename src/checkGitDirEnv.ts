import { debug } from './debug.ts'

export function checkGitDirEnv(): void {
  // if (process.env.GIT_DIR) {
  if (Deno.env.get('GIT_DIR')) {
    // debug(`GIT_DIR environment variable is set to ${process.env.GIT_DIR}`)
    debug(`GIT_DIR environment variable is set to ${Deno.env.get('GIT_DIR')}`)
    debug(
      `If you're getting "fatal: not a git repository" errors, check GIT_DIR value`
    )
  }
}
