export const convertObjectKeysToArray = (
  obj: Record<string, unknown>
): string[] => {
  return Object.keys(obj)
}
