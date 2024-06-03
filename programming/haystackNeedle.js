/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const haystackNeedle = haystack.split(needle)
    console.log(haystackNeedle)
    console.log(haystackNeedle.indexOf(""))
};

const haystack = "sadbsadutsad"
const needle = "sad"

const haystack1= "leetcode"
const needle1 = "leeto"

const haystack2= "hello"
const needle2 = "ll"

strStr(haystack, needle)
// strStr(haystack1, needle1)
// strStr(haystack2, needle2)