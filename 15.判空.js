let obj = {};
// 1.判断是null或undefined
// null == undefined
if (obj == null) {
  console.log(`输入值：${obj}，为空`);
}

// 2.判断是否是空对象
const isEmpty = function (obj) {
  // 判断是否是对象类型，排除null和非对象类型
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    throw new TypeError("这不是一个对象");
  } else {
    // 遍历对象所有的自有属性（仅实例属性，不包含原型链上的属性）
    for (let key in obj) {
      // 确保属性属于对象实例，不来自原型链
      if (obj.hasOwnProperty(key)) {
        // 如果存在自有属性，则不是空对象
        return false;
      }
    }
    // 遍历完成后未返回false，说明没有自有属性，是空对象
    return true;
  }
};
console.log(isEmpty(obj));

// 3. 判断是否是空数组
const isEmptyArr = function (arr) {
  // Array.isArray 比 arr instanceof Array 兼容性更好
  return Array.isArray(arr) && arr.length == 0;
};

// 4. 判断是否是空串
const isEmptyStr = function (str) {
  return str === "" || str.length == 0;
};

// 5.判断一个变量是否为空
const isEmptyAll = function (a) {
  // 是null， undefined，空串
  if (a == null || a === "") {
    return true;
  }

  // 是空数组
  if (Array.isArray(a) && a.length == 0) {
    return true;
  }

  //是空对象
  if (typeof a === "object" && Object.keys(a).length === 0) {
    return true;
  }

  return false;
};
