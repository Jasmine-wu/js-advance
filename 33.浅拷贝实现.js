// 浅拷贝: 对于基本数据类型是值拷贝，引用类型拷贝的是内存地址。
var obj = { a: 1, arr: [2, 3], o: { name: "zhangsan" } };

const shallowCopy = function (src) {
  let newObj = {};
  for (attr in src) {
    if (src.hasOwnProperty(attr)) {
      newObj[attr] = src[attr];
    }
  }
  return newObj;
};

var shallowObj = shallowCopy(obj);
obj.o.name = "lisi";
console.log(shallowObj.o.name); //lisi,值受到了影响
obj.arr[0] = 20;
console.log(shallowObj.arr[0]); //20，值受到了影响
obj.a = 10;
console.log(shallowObj.a); // 1,值没有收到影响
