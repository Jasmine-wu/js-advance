// 用js构造函数实现单例：简言之就是实例存在就直接返回实例，否则new 构造函数返回新创建的
// 思考:1.怎么把创建过的实例保存起来？ 利用立即执行函数+返回函数，缓存变量instance
// 立即执行函数是立即执行的，且只会执行一次，也就是let instance = null;只会执行一次。

// 这样有问题：
// 1. 每次new SingleInstance()(1, 3)都会创建新的闭包，也就是instance每次都会重新初始化。
// 2. 我想要的是 new SingleInstance(1.3)这样的形式

// function SingleInstance() {
//   let instance = null;
//   function CreateInstance(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   return function (name, age) {
//     if (!instance) {
//       instance = new CreateInstance(name, age);
//     }
//     return instance;
//   };
// }

// const instance1 = new SingleInstance()(1, 3);
// const instance2 = new SingleInstance()(2, 3);
// console.log(instance1);
// console.log(instance2);

// console.log(instance1 === instance2);

// 解决：使用立即执行函数
const SingleInstance = (function () {
  let instance = null;
  function CreateInstance(name) {
    this.name = name;
    // this.run = function () {};
  }

  // 方法一般都是所有实例共享的，放原型上
  CreateInstance.prototype.fun = function () {};

  return function (name) {
    if (!instance) {
      return (instance = new CreateInstance(name));
    } else {
      return instance;
    }
  };
})();

const instance1 = new SingleInstance(1); // 返回匿名函数function(name,age)
const instance2 = new SingleInstance(2);
console.log(instance1);
console.log(instance2);

// 或者这样写但不推荐；官方文档建议应该避免从构造函数返回任何东西——尤其是与 this 无关的东西。
// const SingleInstance = (function () {
//   let instance = null;
//   function createInstance(name) {
//     if (!instance) {
//       this.name = name;
//       instance = this;
//     }
//     return instance;
//   }
//   return function (name) {
//     return new createInstance(name);
//   };
// })();

// const instance1 = new SingleInstance(1); // 返回匿名函数function(name,age)
// const instance2 = new SingleInstance(2);
// console.log(instance1);
// console.log(instance2);
// console.log(instance1 === instance2);
