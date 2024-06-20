// 原型继承：通过设置一个对象的原型为另一个对象
// 能继承实例+原型上的属性和方法
// 原型继承的问题：
// 1. 子类实例化时不能传参
// 2. 父类属性如果是引用类型，会被所有子类共享
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.emotion = ["吃饭", "睡觉", "学习"]; // 爱好
}
Person.prototype.gener = "女";
Person.prototype.run = function () {
  console.log("原型方法run了");
};
function Studnet(id) {
  this.id = id; // 学号
}
Studnet.prototype.newFn = function () {
  console.log("这是后面添加的新方法sss");
};

// 原型继承：将子类的原型设置为父类的实例
Studnet.prototype = new Person("zhangsan", 14);
// 修正constructor指向
Studnet.prototype.constructor = Studnet;
var stu1 = new Studnet(1001);

console.log(stu1.name); // zhansan
console.log(stu1.gener); // 女
console.log(stu1.emotion); // ["吃饭", "睡觉", "学习"]
stu1.emotion.push("玩游戏");
console.log(stu1.emotion); // ["吃饭", "睡觉", "学习", "玩游戏"]
stu1.name = "lisi";
console.log(stu1.name); // lisi

// 原型继承的问题：1.子类实例化时无法向父类传参
// 原型继承的问题：2.所有子类会共享父类的引用类型数据
// 创建 stu2对象
var stu2 = new Studnet(1002);
console.log(stu2.emotion); // ["吃饭", "睡觉", "学习", "玩游戏"]
console.log(stu2.name); // zhangsan

// 原型继承的问题：3.在给子类的原型对象上添加属性或者是方法的时候，一定要放在Student.prototype=new Person语句的后面
stu2.newFn(); // 报错
