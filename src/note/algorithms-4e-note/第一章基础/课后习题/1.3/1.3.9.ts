/*
 * @Author: hucheng
 * @Date: 2020-05-30 17:18:35
 * @Description: here is des
 */

// 1+ 2) * 3 -4 ) * 5 -6 )))  =>  (1+ 2) * (((3 -4 ) * (5 -6 )))

import Stack from '../../../../../datastructures/stack/Stack'

function test (str: string) {
    const strArray = str.split('').filter(ele => ele !== ' ')
    const ops = new Stack<string>()
    const value = new Stack<any>()
    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index];
        if (['+', '-', '*', '/', 'sqrt'].includes(element)) {
            ops.push(element)
        } else if (element === ')') {
            const current = value.pop();
            const pre = value.pop()
            value.push(`(${pre}${ops.pop()}${current})`)
        } else {
            value.push(element)
        }
    }
    return value.pop()
}

const result = test('1+ 2) * 3 -4 ) * 5 -6 )))')
console.log(result)
