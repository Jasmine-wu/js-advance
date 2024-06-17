// fn.call/apply/bind都能改变函数内部this的指向,区别在于：参数的传递以及是否立即执行fb
// fn.call(context, arg,arg2), 立即执行fn
// fn.apply(context, [arg1, args1,...]) 立即执行fn
// fn.bind(context, arg1, args1,...]) 返回新函数，调用返回函数时才执行fn
// fn.apply(a, arrs[]) 是执行fn，并将fn内部的this指向a。并逐个传递参数给fn。
// 第一个参数：如果是undefined/ null，则默认是window。
// 第二个参数：参数数组
// 注意：传递的参数都会一个一个的传递给fn。

Function.prototype.myApply = function (context = window, argArr) {
  // 1. 如果不是被函数调用，就报错。
  if (typeof this !== "function") {
    throw new TypeError("Type error");
  }

  // this 是调用apply的fn
  // 2. 保留原始方法
  const fn = Symbol("fn");
  // 重点：将原始方法this保留成context对象的一个属性方法
  context[fn] = this;

  // 3. 调用对象的方法：执行+将方法内部this指向对象
  const res = context[fn](...args);
  // 4. 返回fn执行结果
  delete context[fn];
  return res;
};
Function.prototype.myCall = function (context = window, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Type Error");
  }
  const fn = Symbol("fn");
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
};

// bind() 除了 this 外，还可传入多个参数；
// bing 创建的新函数可能传入多个参数；
// 新函数可能被当做构造函数调用；
// 函数可能有返回值；
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Type Error");
  }
  // 保存this的值
  var self = this;

  return function F() {
    // 考虑new的情况
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, [...args, ...arguments]);
  };
};

// 测试1:
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const res = arr.push.myApply(arr, arr2);
// console.log("result :", res);
// console.log("arr :", arr);

// 测试2: context属性名和方法名命名冲突
// 定义一个对象
// const obj = {
//   greet: "Original property", // 与原始函数名称相同的属性
// };

// // 定义一个函数作为原始函数
// function greet(name) {
//   console.log("this 指向：", this);
//   console.log("Hello, " + name);
// }

// // 调用 myApply 方法，可能会与对象的现有属性命名冲突
// const res = greet.apply(obj, ["John"]);
// console.log("Result:", res); // 应该输出 "undefined"，因为 greet 函数没有返回值

// // 输出对象的属性，查看是否与原始函数名冲突
// console.log("Object property:", obj.greet); // 应该输出 "Original property"

// const obj = {
//   greet: "Original property", // 与原始函数名称相同的属性
//   greet2: function () {
//     console.log("this:", this);
//   },
// };
// obj.greet2();
