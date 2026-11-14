class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    /**
     * Brute Force O(n^2) time complexity, O(1) space solution:     
    replaceElements(arr: number[]): number[] {
        for (let i = 0; i < arr.length; i++) {
            let max = -1;
            for (let j = i+1; j < arr.length; j++) {
                max = Math.max(max, arr[j]);
            }
            arr[i] = max;
        }
        return arr;
    }
    */
    /** O(n) time and O(1) space solution  */
    replaceElements(arr: number[]): number[] {
        let max = -1;
        let curNum;
        for (let i = arr.length - 1; i >= 0; i--) {
            curNum = arr[i];
            arr[i] = max;
            max = Math.max(curNum, max);
        }
        return arr;
    }
}
