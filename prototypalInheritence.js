// const generalArrayUtils = {
//     customReducer : () => {
//         return "reduced"
//     },
//     customMap : () => {
//         return "mapped"
//     }
// }

// const domainArrayUtilsExtended = {
//     __proto__: generalArrayUtils
// }





// const arrToBeReduced = [2, [4,5], [2, [3,5]], 6]

// Array.__proto__ = generalArrayUtils
// console.log(arrToBeReduced)
// const res = domainArrayUtilsExtended.reduce(arrToBeReduced)
// console.log(res)


// Problem to solve is arrToBeReduced.[allUtilFunctions]

// arrToBeReduced.__proto__ = generalArrayUtils

// const res2 = arrToBeReduced.customReducer()


// function customReduce(arr) {
//     let result = [];
//     for (const item of arr) {
//       if (Array.isArray(item)) {
//         // If the item is an array, concatenate its elements to the result
//         result.push(...item);
//       } else {
//         // If the item is not an array, push it directly to the result
//         result.push(item);
//       }
//     }
//     return result;
//   }
  
//   const arr = [2, 3, [5, 6], [4, 7]];
//   const res = arr.customReduce();
//   console.log(res); // Output: [2, 3, 5, 6, 4, 7]


const customReduce = function() {
    // Flatten the array
    const flattenArray = (arr) => {
        return arr.reduce((acc, val) => 
            Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
        );
    };
    return flattenArray(this);
};

Array.prototype.cr = customReduce
String.prototype.cr = customReduce
const res = [2, 3, [5, 6], [4, 7]].cr();
const stringRes = "Hello world".cr()
console.log(res);  // Output: [2, 3, 5, 6, 4, 7]