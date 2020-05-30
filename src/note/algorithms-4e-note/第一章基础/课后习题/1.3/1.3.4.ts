/*
 * @Author: hucheng
 * @Date: 2020-05-30 16:39:57
 * @Description: here is des
 */
// [()]{}{[()()]()} return true, [(]) return false

import Stack from '../../../../../datastructures/stack/Stack'

function validateClosed (str: string) {
    debugger
    const stack = new Stack<string>()
    const strArray = str.split('').filter(ele => ele !== '')
    const s = ['[', '(', '{']
    let result = false;

    const fn_map: any = {
        ']': (value: string) => { return value === '[' },
        ')': (value: string) => { return value === '(' },
        '}': (value: string) => { return value === '}' }
    }
    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index];
        if (s.includes(element)) {
            stack.push(element)
            continue
        }
        const fn = fn_map[element]
        if (fn && fn(stack.pop())) {
            result = true
        }
    }
    if (stack.size() > 0) {
        result = false
    }
    return result
}

const result1 = validateClosed('[()]{[(){}()]()}')
const result2 = validateClosed('[(])')
console.log(result1, result2)
