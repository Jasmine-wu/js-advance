// promise函数
// - 传入一个函数，该函数接受两个参数：resolve, reject
// - 有三个状态: pendding, fullfilled, rejected， 状态只能单向改变。
// - 调用resolve会将promise的状态从pedding->fullfilled.调用reject会将promise的状态从pedding->rejected
// - 调用resovle返回的结果用.then获取。调用rejecte结果.catch获取。
const p1 = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle(10);
  }, 10);
});

const p2 = p1.then(
  (value) => {
    console.log("p1第一次then成功返回结果 :", p1, value);
  },
  (reason) => {
    console.log("p1第一次then失败返回结果", p1, reason);
  }
);
p2.then(
  (value) => {
    console.log("p2第一次then成功返回结果 :", p2, value);
  },
  (reason) => {
    console.log("p2第一次then失败返回结果 :", p2, reason);
  }
);
// 定义三种状态
const PENDING = "PENDING"; // 进行中
const FULFILLED = "FULFILLED"; // 已成功
const REJECTED = "REJECTED"; // 已失败

class Mpromise {
  constructor(exector) {
    // 状态
    this.state = PENDING;
    // 兑现值
    this.value = undefined;
    // 拒绝值
    this.reason = undefined;

    // 存放Promise对象被兑现时异步执行的函数
    this.onFullfilledCallbacks = [];
    // 存放Promise对象被拒绝时异步执行的函数
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      // 只有pedding状态才能更改状态
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFullfilledCallbacks.forEach((callback) => {
          callback && callback(this.value);
        });
      }
    };

    const reject = (reason) => {
      //
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => {
          callback && callback(this.reason);
        });
      }
    };

    try {
      // 立即执行executor
      exector(resolve, reject);
    } catch (e) {
      // executor执行出错，将错误内容reject抛出去
      reject(e);
    }
  }
  // then方法有两个处理函数:
  // onFullfilled（value）函数：一个在此promise对象被兑现时异步执行的函数。
  // onRejected函数（reason）：一个在此promise对象被拒绝时异步执行的函数。
  then(onFullfilled, onRejected) {
    // 值穿透处理：
    // 如果onFullfilled不是函数，则内部会被替换成恒等函数
    onFullfilled = typeof onFullfilled === "function" ? onFullfilled : (x) => x;
    // 如果onFullfilled不是函数，则内部会被替换成抛出器函数
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (x) => {
            throw x;
          };
    // 保存this
    const self = this;
    return new Mpromise((reject, resolve) => {
      //状态还未改变时，收集回调函数
      if (self.state === PENDING) {
        self.onFullfilledCallbacks.push(() => {
          // 处理函数的调用是异步执行的
          try {
            setTimeout(() => {
              const result = onFullfilled(self.value);
              // 如果处理函数的返回结果是Promise对象
              result instanceof Mpromise
                ? result.then(resolve, reject)
                : resolve(result);
            }, 0);
          } catch (error) {
            reject(error);
          }
        });
        self.onRejectedCallbacks.push(() => {
          // 处理函数的调用是异步执行的
          try {
            setTimeout(() => {
              const result = onRejected(self.reason);
              // 如果处理函数的返回结果是Promise对象
              result instanceof Mpromise
                ? result.then(resolve, reject)
                : resolve(result);
            }, 0);
          } catch (error) {
            reject(error);
          }
        });
      } else if (self.status === FULFILLED) {
        try {
          setTimeout(() => {
            const result = onFulfilled(self.value);
            result instanceof Promise
              ? result.then(resolve, reject)
              : resolve(result);
          });
        } catch (e) {
          reject(e);
        }
      } else if (self.status === REJECTED) {
        try {
          setTimeout(() => {
            const result = onRejected(self.reason);
            result instanceof Promise
              ? result.then(resolve, reject)
              : resolve(result);
          });
        } catch (e) {
          reject(e);
        }
      }
    });
  }
  catch(onReject) {
    return self.then(null, onReject);
  }
}
