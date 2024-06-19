// fn.bind(context,arg1,arg2):
// 1. 返回一个新函数，当调用新函数时，会实现执行fn并将fn内部的this指向context
// 2. 返回的新函数支持new，并支持传入参数。new操作返回fn函数实例。
Function.prototype.myCall = function (context, ...args) {
  if (typeof this != "function") {
    throw new TypeError("this must be a function");
  }
  // 1. 将fn保留成context的一个属性值
  const fn = Symbol("_myCallFn_");
  context[fn] = this;
  // 2.调用 fn，并将fn内部的this指向context
  const result = context[fn](...args);
  delete fn;
  return result;
};

// bug: 箭头函数内部是没有this的，箭头函数内部的this指向的是箭头函数声明时所在的执行上下文
// Function.prototype.myBind = (context, ...args) => {
Function.prototype.myBind = function (context, ...args) {
  // console.log("this:", this);
  if (typeof this != "function") {
    throw new TypeError("this must be a function");
  }
  // 保存fn
  const self = this;

  const newFn = function (...args2) {
    // 1.支持new fn返回fn的实例
    if (this instanceof self) {
      return new self(...args2);
    }

    return self.call(context || window, ...args, ...args2);
  };

  // 1.2 同时要修复原型链，因为你其实是new newFn，虽然返回的是fn函数实例
  newFn.prototype = Object.create(self.prototype);
  newFn.prototype.constructor = newFn;
  return newFn;
};
const obj = {
  fn: function () {
    return "10000";
  },
};

const fn = function (a, b) {
  console.log("this: ", this);
  return a + b;
};

// 测试mycall
// console.log(fn.call(obj, 1, 3));
// console.log(fn.myCall(obj, 1, 3));
// 测试bind
// const newFn = fn.bind(obj, 1, 3);
// console.log(newFn(1, 2));

// const instance = new newFn(1, 2);
// console.log(instance);

const newFn2 = fn.myBind(obj, 1, 3);
// console.log(newFn2);
console.log(newFn2(1, 2));
const instance2 = new newFn2(1, 2);
console.log(instance2);
