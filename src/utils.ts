import type { CheckSyntaxExclude } from './types.js';

export function checkIsExclude(
  path: string,
  exclude?: CheckSyntaxExclude,
): boolean {
  if (!exclude) {
    return false;
  }

  const excludes = Array.isArray(exclude) ? exclude : [exclude];

  return excludes.some((reg) => reg.test(path));
}
