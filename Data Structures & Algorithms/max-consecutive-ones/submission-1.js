class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let curMax = 0, totalMax = 0;
        for (const num of nums) {
            if (num !== 1) {
                totalMax = Math.max(curMax, totalMax);
                curMax = 0;
            } else {
                curMax++;
            }
        }
        return Math.max(curMax, totalMax);;
    }
}
