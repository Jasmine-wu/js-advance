// 不管是用构造函数还是class，核心都是用一个变量保存实例。
// 关键在于这个变量如何保存：
// 构造函数实现:用立即执行函数+闭包
// class实现：将变量保存成类属性

// class SingleInstance {
//   constructor(name) {
//     // 这样直接挂在类上，外部是可以访问的
//     if (!SingleInstance.instance) {
//       this.name = name;
//       SingleInstance.instance = this;
//     }
//     return SingleInstance.instance;
//   }

//   run() {
//     console.log("run");
//   }
// }

class SingleInstance {
  // 定义一个私有的静态变量，这样的这个静态变量不会被外部访问到
  static #instance = null;
  constructor(name) {
    if (!SingleInstance.#instance) {
      this.name = name;
      SingleInstance.#instance = this;
    }
    return SingleInstance.#instance;
  }

  run() {
    console.log("run");
  }
}

const instance1 = new SingleInstance(1); // 返回匿名函数function(name,age)
const instance2 = new SingleInstance(2);
console.log(instance1 === instance2);
console.log(SingleInstance.instance); // undefined
console.log(instance1);
console.log(instance2);
