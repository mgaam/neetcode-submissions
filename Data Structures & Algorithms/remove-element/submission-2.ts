class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */

    /** Notes
     * The commented out solution below is buggy because nums.length is
     * calculated in the for loop on every iteration, and splice shifts
     * the elements on the right of the removed item to the left. So,
     * something like nums = [3, 3, 2, 3] and val = 3 will result in
     * [3, 2] at the end. The solution is to either iterate backwards
     * (since after splice shifts to the left your index will be at 
     * an item you already processed and you can safely decrement) or
     * to iterate forward but decrement the index after splicing so 
     * when the loop increments it, you don't skip the item that was
     *  just shifted left.
     */
    // removeElement(nums: number[], val: number): number {
    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] === val) {
    //             nums.splice(i,1);
    //         }
    //     }
    //     return nums.length;
    // }
    
    /** Notes
     * Solution below has time complexity of O(n^2) because each splice
     * is at worst O(n) due to shifting. Space complexity is O(1) 
     * since no auxillary space is used.
     */
    // removeElement(nums: number[], val: number): number {
    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] === val) {
    //             nums.splice(i,1);
    //             i--;
    //         }
    //     }
    //     return nums.length;
    // }

    /** Notes
     * The solution below is O(2n) = O(n) time for looping through 
     * nums once then looping over temp once.
     * Space complexity is O(n) because of the temp array.
     * This is better than the solution above since time is almost always
     * more important than space, especially when time is inefficient 
     * like O(n^2).
     */
    removeElement(nums: number[], val: number): number {
        let temp = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) temp.push(nums[i]);
        }
        for (let i = 0; i < temp.length; i++) {
            nums[i] = temp[i];
        }
        return temp.length
    }
}
