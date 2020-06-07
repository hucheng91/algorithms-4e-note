/*
 * @Author: hucheng
 * @Date: 2020-06-08 06:45:50
 * @Description: here is des
 */
import BaseSort from './baseSort'

export default class Sort extends BaseSort {
    sort (array: number[]) {
        for (let index = 0; index < array.length; index++) {
            let minxIndex = index
            for (let j = index; j < array.length; j++) {
                if (this.less(array[j], array[minxIndex])) {
                    minxIndex = j
                }
            }
            this.exch(array, index, minxIndex)
        }

        this.show(array)
    }
}
new Sort().sort([1, 4, 3])
