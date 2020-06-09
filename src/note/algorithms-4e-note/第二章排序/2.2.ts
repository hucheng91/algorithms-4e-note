/*
 * @Author: hucheng
 * @Date: 2020-06-09 06:34:18
 * @Description: here is des
 */
// 插入排序
import BaseSort from './baseSort'

class InsSort extends BaseSort {
    sort (array: number[]) {
        for (let index = 0; index < array.length; index++) {
            console.log('外循环:', index)
            for (let j = index; j > 0 && this.less(array[j], array[j - 1]); j--) {
                console.log('内循环:', array[j], array[j - 1])
                this.exch(array, j, j - 1)
            }
        }

        this.show(array)
    }
}

class InsSortWithoutExchange extends BaseSort {
    sort (array: number[]) {
        for (let index = 0; index < array.length; index++) {
            const aux = array[index]
            console.log('外循环:', aux)
            for (let j = index; j > 0 && this.less(aux, array[j - 1]); j--) {
                console.log('内循环:', aux, array[j], array[j - 1])
                this.exch(array, j, j - 1)
            }
        }

        this.show(array)
    }
}
debugger
new InsSort().sort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
