export function getObjectLength(obj: Record<string, unknown>): number {
  return Object.keys(obj).length;
}

export function isObjectEmpty(obj: Record<string, unknown>): boolean {
  return getObjectLength(obj) === 0;
}
