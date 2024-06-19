// 组合继承：原型继承+借用构造函数继承
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
function Studnet(id, age) {
  // 构造函数继承：
  Person.call(this, age);
  this.id = id; //子类独有的属性
}
// 原型继承：
Studnet.prototype = new Person();
Studnet.prototype.constructor = Studnet;

var stu1 = new Studnet(1001, 21);
stu1.run();
stu1.emotion.push("打豆豆");
console.log("爱好是:" + stu1.emotion);

var stu2 = new Studnet(10003, 99);
stu2.run();
console.log("爱好是:" + stu2.emotion);
