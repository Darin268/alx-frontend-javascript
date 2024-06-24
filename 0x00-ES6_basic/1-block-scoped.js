// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var for block-scoped variable
  const task2 = true; // Use const for constants that shouldn't change

  if (trueOrFalse) {
    task = true; // Reassign the block-scoped variable
    // task2 = false; // Uncommenting this line will cause an error since task2 is declared as const
  }

  return [task, task2];
}
