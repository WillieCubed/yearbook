import wittyComments from "../lib/data/wittyComments.json";

/**
 * Randomly generate an amusing comment for Clark Wrapped.
 */
export function getWittyMemoryComment(): string {
  const randomSelection = Math.floor(Math.random() * wittyComments.length);
  return wittyComments[randomSelection];
}
