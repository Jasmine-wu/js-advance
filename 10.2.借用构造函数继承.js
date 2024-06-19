// 借用构造函数继承:子类内部调用父类的构造函数，又叫借用构造函数
function Person(name) {
  this.name = name;
  this.emotion = ["吃饭", "睡觉", "学习"]; // 爱好
}
Person.prototype.paly = function () {
  console.log("we play");
};
function Studnet(id, name) {
  this.id = id; // 学号
  Person.call(this, name);
}

// 借用构造函数继承：子类实例化可向父类传参
var stu1 = new Studnet(1001, "zhang");
var stu2 = new Studnet(1002, "lisi");
console.log(stu1.name);
console.log(stu2.name);
// 借用构造函数继承：各个子类之间实例属性和方法都是互不干扰的，即使父类的数据是引用类型
stu1.emotion.push("玩游戏");
console.log(stu1.emotion); // ["吃饭", "睡觉", "学习", "玩游戏"]
console.log(stu2.emotion); // ["吃饭", "睡觉", "学习"]
// 借用构造函数继承问题：1.只能继承实例属性和方法不能继承原型上的方法
// 借用构造函数继承问题：1.只能继承实例属性和方法不能继承原型上的方法

stu1.paly(); // 报错
