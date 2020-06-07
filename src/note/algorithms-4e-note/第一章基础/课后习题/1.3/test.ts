/*
 * @Author: hucheng
 * @Date: 2020-06-06 19:49:41
 * @Description: here is des
 */

var longestConsecutive = function (nums: number[]): number {
    const num_set: Set<number> = new Set([...nums]);

    let longestStreak = 0;
    for (const num of num_set) {
        if (!num_set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (num_set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
debugger
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
