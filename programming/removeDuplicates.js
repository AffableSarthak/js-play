/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0
    let numsv2 = []
    for (let i = 0; i < nums.length; i ++){
        if(numsv2.includes(nums[i])) {
            k++
            continue
        }
        numsv2.push(nums[i])
    }

    return k
};

const removeDuplicatesV2 = (nums) => {
    console.log(nums.length - [...new Set(nums)].length)
    console.log([...new Set(nums)])
}

const removeDuplicatesV3 = (nums) => {
    if (nums.length === 0) {
        return 0;
    }

    let j = 1
    for (let i=1; i< nums.length; i++) {
        console.log(nums[j-1], nums[i], "j-1, i")
        if(nums[i] !== nums[j-1]){
            console.log(i,j, "Index before")
            nums[j] = nums[i]
            j++;
            console.log(i,j, "Index after")
        }
    }

    return j;
}

const case1 = [0,0,1,1,1,2,2,3,3,4]
const case2 = [1,1,2]
// removeDuplicates(case1)
// removeDuplicatesV2(case1)
removeDuplicatesV3(case1)