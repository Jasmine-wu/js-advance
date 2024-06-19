// 数据转换，对数组里每一项进行数据转换，并返回转换后的新数组。
// 新数组和原数组长度是一样的
Array.prototype.myMap = function (fn) {
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    const curItem = this[index];
    const newItem = fn(curItem);
    newArr.push(newItem);
  }
  return newArr;
};
