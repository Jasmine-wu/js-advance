// es6语法
// 实例属性和方法
// 原型属性和方法
// 私有属性和方法
// 静态静态
// 继承： extendsi继承, super()子类调用父类的构造函数

// 1. 通过super关键字可以直接调用父类的构造函数和方法，而在寄生组合继承中，需要手动通过call或apply来调用父类构造函数。
// 2. class自动处理了原型链的继承关系，无需手动设置prototype
// 3. class 构造函数内的属性和方法是实例方法
// 4. class 构造函数外的属性和方法是原型方法
// 5. 在属性和方法前#则为私有，前加static则是静态的

class Person {
  constructor(name) {
    this.name = name;
  }
  // 通过#作为前缀添加的属性会变为私有
  // 私有属性
  #secret = "我有一个小秘密，就不告诉你";
  // 私有方法
  #say() {
    // 私有属性可以在
    console.log("私有的say方法");
  }
  info() {
    // 在类的内部可以访问私有属性调用私有方法
    console.log(this.#secret);
    this.#say();
  }

  // 通过 static定义静态属性/方法
  static staticMethod() {
    console.log("这是一个静态方法");
    console.log(this);
  }
  static info = "直立行走，双手双脚";
}

const p = new Person("jack");
console.log(p);
// 外部无法访问 点语法访问直接报错，通过[]无法动态获取
console.log(p["#secret"]);
p.info();
// 通过类访问静态属性/方法
Person.staticMethod();
console.log(Person.info);
