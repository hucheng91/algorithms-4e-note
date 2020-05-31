/*
 * @Author: hucheng
 * @Date: 2020-06-01 06:29:04
 * @Description: here is des
 */
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}
interface IteratorResult<T> {
    done: boolean;
    value: T;
}
