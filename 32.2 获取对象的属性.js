// 1. 判断是否是对象
// toString() - > "[Object Object]"
// const isObject = function (obj) {
//   // 用toString方法
//   console.log(
//     Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() ===
//       "object"
//   );
// };
// isObject(function () {});

// 2.获取所有属性（实例+原型）
function Person() {
  this.name = "KXY";
}
Person.prototype = {
  job: "student",
};

var person = new Person();
// 定义一个属性
Object.defineProperty(person, "sex", {
  value: "female",
  enumerable: false,
});

// 1. Object.keys获取所有实例属性（不可枚举的除外）
// 遍历对象上可枚举的自有属性，那么 Object.keys()
// console.log(Object.keys(person)); //["name"] //无法获取不可枚举的属性与原型链上继承的属性
// console.log(Object.getOwnPropertyNames(kxy)); //["name", "sex"]
//for...in能获取原型链上继承的属性，无法获取不可枚举的属性

// 2. 获取所有属性包括实例属性以及原型属性（不可枚举的除外）
for (var attr in person) {
  console.log("person." + attr + " = " + person[attr]); // kxy.name = KXY
  // 3. 判断这个属性是不是实例属性
  if (person.hasOwnProperty(attr)) {
    console.log("这是实例属性：", attr);
  } else {
    console.log("这是原型属性：", attr);
  }
}

// 3. Reflect.ownKeys: 获取所有实例属性（不包括原型上的）
// 获取并遍历对象所有自有属性，包括不可枚举属性和Symbol属性
