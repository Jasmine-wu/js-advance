// Object.create和new操作符都是创建新对象
// 区别在于new操作符是基于构造函数的继承，Object.create是原型继承
Object.create = function (proto, propertiesObj) {
  // 1. 创建空对象
  const F = function () {};
  // 2. 空对象的原型指向传入的原型
  F.prototype = proto;
  // 3. 空对象的属性是传入的属性对象
  if (propertiesObj) {
    Object.defineProperties(F, propertiesObj);
  }
  // 4. 返回新对象
  return new F();
};
