// 寄生组合继承：
// 寄生继承+ 借用构造函数继承
function Person(age) {
  this.emotion = ["吃饭", "睡觉", "学习"]; // 爱好
  this.age = age;
  this.study = function () {
    console.log(this.id + "号同学要努力学习");
  };
}
Person.prototype.run = function () {
  console.log(this.id + "号学生正在跑步,年龄是:" + this.age);
};
Person.prototype.study = function () {
  console.log(this.id + "号学生需要好好学习");
};
function Studnet(id, age) {
  Person.call(this, age);
  this.id = id;
}
// 寄生式继承：
// 1. 创建一个空的构造函数
function Super() {}
// 2. 将空构造函数的原型对象指向父类的原型（而不是实例化父类的对象）
Super.prototype = Person.prototype;
const supper = new Super();
// 3.将子类的原型指向空构造函数的实例
Studnet.prototype = supper;
// 修复prototype
Studnet.prototype.constructor = Studnet;

// // 上面代码4行代码等价于：
// Studnet.prototype = Object.create(Person.prototype)
// Studnet.prototype.constructor = Studnet;

// 问题：为什么不直接让Studnet.prototype = Person.prototype?
// prototype是引用类型，这样会使得两个prototype指向同一个地址，两者会互相影响

var student = new Studnet(1001, 21);
student.run();
console.log("爱好是:" + student.emotion);
student.study();
