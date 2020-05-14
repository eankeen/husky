export function debug(...args: string[]): void {
  // if (['1', 'true'].includes(process.env.HUSKY_DEBUG || '')) {
  if (['1', 'true'].includes(Deno.env.get('HUSKY_DEBUG') || '')) {
    console.log('husky:debug', ...args)
  }
}
