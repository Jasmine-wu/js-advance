// 深拷贝优化：排除原型上的属性拷贝，考虑循环引用导致深拷贝栈溢出的问题
let map = new WeakMap();
const deepCopy = function (obj) {
  // 排除null,undefined, 非obect
  if (typeof obj === "object" && obj != null) {
    let newObj = Array.isArray(obj) ? [] : {};

    // 2.如果要拷贝的对象已存在，则直接返回该拷贝对象
    // if (map.get(obj)) {
    //   return obj;
    // }
    // 1.否则，记录未拷贝对象
    // map.set(obj, true);
    // for (let attr in obj) {
    //   if (obj.hasOwnProperty(attr)) {
    //     newObj[attr] = deepCopy(obj[attr]);
    //   }
    // }
    // 遍历非枚举自有属性（不包括原型链上的）
    // for...of 遍历数组的值
    for (const attr of Object.keys(obj)) {
      newObj[attr] = deepCopy(obj[attr]);
    }
    return newObj;
  } else {
    return obj;
  }
};

var obj = {
  userName: "zhangsan",
  a: {
    a1: "hello",
  },
  //添加数组
  // arr: [2, 3],
};
// console.log(obj);
// obj.d = [1, 2, 3];
console.log(obj);

// let arr2 = [1, [1, ["xx", "d"], 4], 3, 3, 33];

// 问题：假如对象之前存在循环引用问题也就是对象的属性引用了对象本身
// 存在循环引用以后再深拷贝要报栈溢出的错误
// 解决：weakMap: weakMap的key必须是对象，且weakMap与key之间是弱引用关系
// obj.o = obj; //构成了循环引用
var result = deepCopy(obj);
// var result = deepCopy(arr2);
obj.userName = "newname";

console.log(result);
