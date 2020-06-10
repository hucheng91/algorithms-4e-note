/*
 * @Author: hucheng
 * @Date: 2020-06-09 08:02:54
 * @Description: here is des
 */
// 希尔排序
import BaseSort from './baseSort'
const print = (a: any, b: any) => {
    console.log('迭代：', `j: ${a}`, `j-h: ${b}`)
    return true
}
export class ShellSort extends BaseSort {
    sort (array: number[]) {
        const N = array.length
        let h = 0
        while (h < (N / 3)) {
            h = 3 * h + 1
        }
        while (h >= 1) {
            for (let i = h; i < N; i++) {
                // console.log('外循环：', `h: ${h}`, `i: ${i}`)
                for (let j = i; j >= h && print(j, j - h) && this.less(array[j], array[j - h]); j -= h) {
                    // console.log('内循环:', array[j], array[j - 1])
                    this.exch(array, j, j - h)
                }
            }
            h = Math.floor(h / 3)
        }

        this.show(array)
    }
}
const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
debugger
new ShellSort().sort(array)
