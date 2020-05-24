/*
 * @Author: hucheng
 * @Date: 2020-05-23 10:37:21
 * @Description: here is des
 */
class Comparator {
    compare: Function;
    constructor (compareFunction?: Function) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    static defaultCompareFunction (a: number, b: number) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    equal (a: any, b: any) {
        return this.compare(a, b) === 0;
    }

    lessThan (a: any, b: any) {
        return this.compare(a, b) < 0;
    }

    greaterThan (a: any, b: any) {
        return this.compare(a, b) > 0;
    }

    lessThanOrEqual (a: any, b: any) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    greaterThanOrEqual (a: any, b: any) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    reverse () {
        const compareOriginal = this.compare;
        this.compare = (a: number, b: number) => compareOriginal(b, a);
    }
}

export default Comparator;
