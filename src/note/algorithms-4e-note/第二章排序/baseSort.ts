/*
 * @Author: hucheng
 * @Date: 2020-06-08 06:46:31
 * @Description: here is des
 */
export default class BaseSort {
    exch (array: any[], i: number, j: number) {
        const t = array[i]
        array[i] = array[j]
        array[j] = t
    }

    less (i: number, j: number) {
        return i - j < 0
    }

    show (array: number[]) {
        console.log(array)
    }
}
