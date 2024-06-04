const arr = [1, 2, [3, 4], [5, [6, 7], 8], 9];

function flatten(arr) {
  const stack = [];
  const result = [];
  stack.push(arr);
  while (stack.length) {
    const current = stack.pop();
    for (let i = 0; i < current.length; i++) {
      const item = current[i];
      if (Array.isArray(item)) {
        stack.push(item);
      } else {
        result.push(item);
      }
    }
  }
  return result;
}

const flattenedArr = flatten(arr);
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
