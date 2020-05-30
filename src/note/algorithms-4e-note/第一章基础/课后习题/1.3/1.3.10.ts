/*
 * @Author: hucheng
 * @Date: 2020-05-30 18:12:15
 * @Description: here is des
 */

// (1 + ( (2 +3 ) * (4 * 5)))  =>  (1+ 2) * (((3 -4 ) * (5 -6 )))

import Stack from '../../../../../datastructures/stack/Stack'

function test (str: string) {
    const strArray = str.split('').filter(ele => ele !== ' ')
    const ops = new Stack<string>()
    let result = ''

    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index]
        if (element === '(') {
            continue
        } else if (['+', '-', '*', '/', 'sqrt'].includes(element)) {
            ops.push(element)
        } else if (element === ')') {
            result = result + ops.pop()
        } else {
            result = result + element
        }
    }
    return result
}
console.log(test('(1 + ( (2 +3 ) * (4 * 5)))'))
