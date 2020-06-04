/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import Queue from '../../../../../datastructures/queue/Queue'

// 约瑟夫环 josephusProblem

function josephusProblem (numberOfPerson: number, personOrder: number) {
    const queue = new Queue<number>()

    for (let index = 1; index <= numberOfPerson; index++) {
        queue.enqueue(index)
    }
    console.log('队列大小:', queue.size())
    while (numberOfPerson > 0) {
        for (let index = 1; index < personOrder; index++) {
            queue.enqueue(queue.dequeue())
        }
        console.log('当前人数:', numberOfPerson, '自杀的人:', queue.dequeue())
        numberOfPerson--
    }
}
josephusProblem(41, 3)
