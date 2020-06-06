/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import Queue from '../../../../../datastructures/queue/Queue'

// 环形缓冲区

class RightBuffer<T> {
    private ringBuffer: T[]
    private size: number = 0
    private first: number = -1 // 消费时候数组下标
    private last: number = -1 // 插入时候数组小标

    private producerAuxBuffer: Queue<T> = new Queue<T>() // 等待插入的数量
    private dataCountToBeConsumed: number = 0 // 标记等待消费的消费者数量

    constructor (capacity: number) {
        this.ringBuffer = new Array(capacity)
    }

    isEmpty (): boolean {
        return this.size === 0
    }

    public produce (item: T) {
        /// 如果有消费者等待消费，直接消费
        if (this.dataCountToBeConsumed > 0) {
            this.consumeData(item)
            this.dataCountToBeConsumed--
        } else {
            // 如果为空，插入缓存数组
            if (this.isEmpty()) {
                this.ringBuffer[this.size] = item
                this.first = 0
                this.last = 0
                this.size++
            } else {
                // 如果在声明 ringBuffer 没有装满，装入，装满的话，放到生产队列里去
                if (this.size < this.ringBuffer.length) {
                    if (this.last === this.ringBuffer.length - 1) {
                        this.last = 0 // 数组插完🈶️从 0 开始
                    } else {
                        this.last++
                    }

                    this.ringBuffer[this.last] = item
                    this.size++
                } else {
                    this.producerAuxBuffer.enqueue(item)
                }
            }
        }
    }

    // 这里是消费数据
    private consumeData (data: T): void {
        console.log('consumeData:', data)
    }

    public consume () {
        if (this.isEmpty) {
            this.dataCountToBeConsumed++
            return null
        }

        const data: T = this.ringBuffer[this.first]
        this.ringBuffer[this.first] = null

        if (this.first === this.ringBuffer.length - 1) {
            this.first = 0
        } else {
            this.first++
        }

        this.size--

        if (!this.producerAuxBuffer.isEmpty) {
            this.produce(this.producerAuxBuffer.dequeue())
        }
        return data;
    }
}

function test () {
    const ringBuffer = new RightBuffer(10)
    ringBuffer.produce(0);
    ringBuffer.produce(1);
    ringBuffer.produce(2);
    ringBuffer.produce(3);
    ringBuffer.produce(4);
    ringBuffer.produce(5);
    const item1 = ringBuffer.consume();
    if (item1 !== null) {
        console.log('Consumed ' + item1);
    }
    console.log('Expected: 0\n');

    const item2 = ringBuffer.consume();
    if (item2 != null) {
        console.log('Consumed ' + item2);
    }
    console.log('Expected: 1\n');

    ringBuffer.produce(6);
    ringBuffer.produce(7);
}

test()
