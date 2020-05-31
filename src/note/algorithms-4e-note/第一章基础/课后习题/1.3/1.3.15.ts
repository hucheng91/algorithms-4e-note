/*
 * @Author: hucheng
 * @Date: 2020-06-01 06:19:14
 * @Description: here is des
 */
import Queue from '../../../../../datastructures/queue/Queue'

function printItem<T> (queue: Queue<T>, k: number) {
    let index = 0
    let result = null
    for (const iterator of queue) {
        index++
        if (index === k) {
            result = iterator
            break
        }
    }
    return result
}

function test () {
    const queue = new Queue<number>()
    queue.enqueue(0)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)

    const result = printItem<number>(queue, 2)
    console.log(result)
}
test()
