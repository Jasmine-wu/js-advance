// Object.create(prototype, propetiesObj):
// 作用：创建新对象，该对象拥有指定的原型和属性
// new fn(): 创建新对象，该对象继承了构造函数的（原型和实例）属性和方法
// 区别在于new操作符是基于构造函数的继承，Object.create是原型继承
Object.prototype.myCreate = function (proto, propertiesObj) {
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
