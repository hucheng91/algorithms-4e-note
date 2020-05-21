/*
 * @Author: hucheng
 * @Date: 2020-05-17 18:32:15
 * @Description: here is des
 */

// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
import Stack from './Stack';

class MinStack<T> {
    private dataStacK: Stack<T>;
    private minStack: Stack<T>;

    constructor () {
        this.dataStacK = new Stack<T>();
        this.minStack = new Stack<T>();
    }

    push (node: T) {
        this.dataStacK.push(node);
        if (this.minStack.size() === 0 || node < this.min()) {
            this.minStack.push(node);
        } else {
            this.minStack.push(this.min());
        }
    }

    min (): T {
        return this.minStack.pop();
    }
}

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]
// 解释:
//   滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

function maxSlidingWindow (nums, k) {
    const result = [];
    const window = [];
    for (let index = 0; index < nums.length; index++) {
        if (index - window[0] > k - 1) {
            window.shift();
        }
        let j = window.length - 1;
        while (j >= 0 && nums[window[j]] <= nums[index]) {
            j--;
            window.pop();
        }
        window.push(index);
        if (index >= k - 1) {
            result.push(nums[window[0]]);
        }
    }
}
