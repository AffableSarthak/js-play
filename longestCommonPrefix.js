/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let left = 0
    let right = 1

    let commonPrefix = new Map()
    
    for (let s of strs) {
        // get common prefix
        // if prefix is there then, move right to next, set the prefix var
        // no prefix then move left and right to next
    }
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefixV2 = function(strs) {
    let result = '',
        prefix = strs[0];
    
    for (let i = 0; i < prefix.length; i++) {
      if (strs.some(str => str[i] !== prefix[i])) {
        break;
      }
      result += prefix[i];
    }
    
    console.log(result)
    return result
  };

  var longestCommonPrefixV3 = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
     console.log(prev, next)
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) {
          console.log(prev[i], next[i])
          i++
        };
        return prev.slice(0, i);
    });
};

const case1 = ["flower","flow","flight"]
longestCommonPrefixV3(case1)