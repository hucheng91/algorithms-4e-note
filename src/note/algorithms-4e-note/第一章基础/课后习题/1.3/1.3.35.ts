/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import { DoublyLinkedNode } from '../../../../../datastructures/linked-list/DoublyLinkedList'

class RandomQueue<T> {
    private item: T[] = []
    public size: number = 0

    public enqueue (data: T): void {
        this.item.push(data)
        this.size++
    }

    public dequeue () {
        if (this.size === 0) {
            throw new Error(' this queue is null')
        }
        if (this.size === 1) {
            const result = this.item[0]
            this.item = []
            return result
        }
        const radomIndex = Math.floor(Math.random() * this.size)
        const result = this.item[radomIndex]
        this.item[radomIndex] = this.item.pop()
        this.size--
        return result
    }

    public sample () {
        if (this.size === 0) {
            throw new Error(' this queue is null')
        }

        const radomIndex = Math.floor(Math.random() * this.size)
        return this.item[radomIndex]
    }
}
class Card {
    value: string
    suit: string

    constructor (value: string, suit: string) {
        this.value = value
        this.suit = suit
    }
}
function getData () {
    const suits = ['♠️', '♣️', '♥️', '♦️']
    const randomQueue = new RandomQueue()
    suits.forEach(suit => {
        randomQueue.enqueue(new Card('A', suit));
        randomQueue.enqueue(new Card('2', suit));
        randomQueue.enqueue(new Card('3', suit));
        randomQueue.enqueue(new Card('4', suit));
        randomQueue.enqueue(new Card('5', suit));
        randomQueue.enqueue(new Card('6', suit));
        randomQueue.enqueue(new Card('7', suit));
        randomQueue.enqueue(new Card('8', suit));
        randomQueue.enqueue(new Card('9', suit));
        randomQueue.enqueue(new Card('10', suit));
        randomQueue.enqueue(new Card('J', suit));
        randomQueue.enqueue(new Card('Q', suit));
        randomQueue.enqueue(new Card('K', suit));
    })
    return randomQueue
}
test()
function test () {
    const randomQueue = getData()
    for (let i = 0; i < 2; i++) {
        let count = 0;
        console.log('Hand ' + (i + 1));

        while (count < 13) {
            console.log(randomQueue.dequeue());
            count++;
        }
    }
    const sample = randomQueue.sample();
    console.log('Size before sample: ' + randomQueue.size + ' Expected: 26');
    console.log('Random item: ' + sample);
    console.log('Size after sample: ' + randomQueue.size + ' Expected: 26');
}
