// 实现深拷贝
// typof obj == 'object', obj为对象，数组和null时
const deepCopy = function (obj) {
  if (typeof obj == "object" && obj != null) {
    // for in遍历数组的值,或者对象的key
    let newObj = Array.isArray(obj) ? [] : {};
    // for (const key of Object.keys(obj)) {
    // }

    Object.keys(obj).forEach((item) => {
      newObj[item] = deepCopy(obj[item]);
    });

    return newObj;
  }
  return obj;
};

var obj = {
  userName: "zhangsan",
  a: {
    a1: "hello",
  },
  //添加数组
  arr: [2, 3],
};
console.log(obj);

var result = deepCopy(obj);
obj.c = "fadfadf";
obj.arr.pop();

console.log(result);
