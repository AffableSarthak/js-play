/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length<2) return nums[0]
    
    let minCount = Math.floor(nums.length / 2)

    let countMap = new Map()

    for(let i = 0; i< nums.length; i++) {
        countMap.set(nums[i], countMap.has(nums[i]) ? countMap.get(nums[i]) + 1 : 1)
        if (countMap.get(nums[i]) > minCount) return nums[i]
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementV2 = function(nums) {
    let count = 0, leader=0;
    for (let i=0; i<nums.length; i++) {
        console.log( "count:",count, "leader:", leader, "i:", i, "nums[i]:", nums[i])
        if (count < 1) leader = nums[i]
        if (nums[i] == leader) count++;
        else count--;
    }
    return leader;
};

const case1 = [2,2,1,1,1,2,2]
majorityElementV2(case1)
