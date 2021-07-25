export function assert(
  condition: boolean,
  message = "Assertion failed"
): void | never {
  if (!condition) throw new Error(message);
}
