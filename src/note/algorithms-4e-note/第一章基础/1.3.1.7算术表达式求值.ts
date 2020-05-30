/*
 * @Author: hucheng
 * @Date: 2020-05-29 06:38:33
 * @Description: here is des
 */

// const str = `1 + 2 + 3`
const str = '(1 + ( (2 +3 ) * (4 * 5)))';
test(str);
function test (str: any) {
    const ops: any[] = [];
    const vals: any[] = [];
    const strArray = str.split('').filter((ele: string) => ele !== ' ');
    console.log(strArray);
    const operate = (op: any, current:any, before: any) => {
        let result = 0;
        if (op === '+') { result = before + current; }
        if (op === '-') { result = before - current; }
        if (op === '*') { result = before * current; }
        if (op === '/') { result = before / current; }
        if (op === 'sqrt') { result = Math.sqrt(current); }
        return result;
    };
    debugger;
    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index];
        if (element === '(') {
            continue;
        } else if (['+', '-', '*', '/', 'sqrt'].includes(element)) {
            ops.push(element);
        } else if (element === ')') {
            const op = ops.pop();
            // @ts-ignore
            const val = parseFloat(vals.pop());
            vals.push(operate(op, val, vals.pop()));
        } else {
            vals.push(parseFloat(element));
        }
    }
    const opsLength = ops.length;
    for (let index = 0; index < opsLength; index++) {
        const op = ops.pop();
        // @ts-ignore
        const val = parseFloat(vals.pop());
        vals.push(operate(op, val, vals.pop()));
    }
    console.log(vals, ops);
    console.log(vals.pop());
    return vals;
}
