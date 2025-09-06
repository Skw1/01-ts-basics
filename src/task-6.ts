// Task 6 //

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]); // 1
const firstLetter = getFirstElement<string>(["a", "b", "c"]); // "a"
const firstBool = getFirstElement<boolean>([true, false, true]); // true

console.log(firstNumber, firstLetter, firstBool);
