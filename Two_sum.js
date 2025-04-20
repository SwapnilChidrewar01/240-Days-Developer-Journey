//  Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

let nums = [2, 7, 11, 15]
let target = 9

// brut force method 
// time complexity: O(n^2)
// space complexity: O(1)

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
        if (nums[i] + nums[j] == target) {
            console.log([i, j])
        }
    }

}


// optimised way 
// time complexity: O(n)
// space complexity: O(n)
// for just one pair
let nums1 = [2, 7, 11, 15,6,3]
let target1 = 9

function TwoSum(nums1, target1) {
    let map = new Map()
    for (let i = 0; i < nums1.length; i++) {
        let compliment = target1 - nums1[i];
        if (map.has(compliment)) {
            return [map.get(compliment), i]
        }

        map.set(nums1[i],i)
    }
}

const ans=TwoSum(nums1,target1)


// for each pair

function allTwoSums(nums, target) {
    let map = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            result.push([map.get(complement), i]);
        }
        map.set(nums[i], i);
    }

    return result;
}

console.log(allTwoSums(nums, target)); // Output: [[0, 1], [5, 4]]
