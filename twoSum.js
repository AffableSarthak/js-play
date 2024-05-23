/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // console.log(nums)
    const sortedNums = nums
    let start = 0
    let end = sortedNums.length - 1
    let mid = Math.floor(end / 2)

    // console.log(start, mid, end)
    console.log(sortedNums, start, mid, end)

    if(end ===1 ){
      
        return [0, 1]
    }
    if (sortedNums[mid] > target) {
        const midTargetValue = sortedNums[mid - 1] + sortedNums[mid]
        if (midTargetValue === target) {
            // console.log(sortedNums, mid-1, mid)
            return [mid - 1, mid]

        } else {
            end = mid
            twoSum(sortedNums.slice(start, end), target)
        }
    } else {
        const midTargetValue = sortedNums[mid + 1] + sortedNums[mid]
        if (midTargetValue === target) {
            // console.log(sortedNums, mid, mid+1)
            return [mid, mid + 1]
        } else {
            start = mid
            twoSum(sortedNums.slice(start, end), target)
        }
    }
}

var twoSumV2 = (nums, target) => {
    let map = new Map()
    for (let i = 0; i < nums.length;  i++) {
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i]
        } else {

            map.set(nums[i], i)
        }
    }
    console.log(map.entries())
return []
}
const case1 = [3, 2, 4]
const case2 = [2, 7, 11, 15]
// const ts = twoSum(case2, 9)
twoSumV2(case1, 6)
