// 1. 创建一个空对象，新对象的原型指向构造函数的原型对象。
// 2. 将构造函数内部的this指向新对象
// 3. 返回新对象:如果构造函数返回的是对象，则返回该对象，否则返回新创建空对象

function myNew(fn, ...args) {
  // 1. 创建空对象空对象的原型指向构造函数的原型对象
  let instance = Object.create(fn.prototype);

  // 2. 将构造函数内的this指向空对象
  const result = fn.call(instance, ...args);

  // 3. 处理返回值
  return typeof result === "object" && result != null ? result : instance;
}
