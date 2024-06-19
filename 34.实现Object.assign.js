// js中Object.assign(target, source)对象合并也是浅拷贝实现的
// Object.assign(target, source)：合并两个对象，将source合并到target，并返回target
Object.myAssign = function (target, src) {
  // 1. 如果第一参数为null或者undefined已经不是对象类型则抛错
  if (typeof target === "object" && target == null) {
    throw new TypeError("tagert不能为空");
  }

  // 2. 如果只有一个参数，则返回第一个参数，不做处理
  if (arguments.length == 1) {
    return arguments[0];
  }

  // 3. 浅拷贝
  // 遍历对象所有的属性（实例+原型）
  for (const attr in src) {
    // 如果是实例属性再copy
    if (src.hasOwnProperty(attr)) {
      target[attr] = src[attr];
    }
  }
  return target;
};

var obj = { a: 1, arr: [2, 3], o: { name: "zhangsan" } };
var result = {};
//将obj对象拷贝给result对象
// Object.assign(result, obj);
Object.myAssign(result, obj);

console.log(result);
obj.a = 10;
console.log(result.a); // 1，不受影响
obj.arr[0] = 20;
console.log(result.arr[0]); //20 受影响
obj.o.name = "lisi";
console.log(result.o.name); // lisi 受影响
