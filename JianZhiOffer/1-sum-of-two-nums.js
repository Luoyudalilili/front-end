// 时间复杂度 O(n^2)，空间复杂度 O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_0 = function (nums, target) {
  let i, j;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return 0;
};

/**
 * 总结一下，当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法。
 * 但是哈希法也是牺牲了空间换取了时间，因为我们要使用额外的数组，set或者是map来存放数据，才能实现快速的查找。
 * 如果在做面试题目的时候遇到需要判断一个元素是否出现过的场景也应该第一时间想到哈希法！
 */
// 哈希法 时间复杂度 O(n) 空间复杂度 O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i; // 是存当前的数，不是需要的数！
  }
};

console.log(twoSum_1([2, 7], 9));
