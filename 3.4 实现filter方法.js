// 将所有满足条件的元素放到数组中返回
Array.prototype.myFilter = function (fn) {
  let resultArr = [];
  for (let index = 0; index < this.length; index++) {
    const currentItem = this[index];
    const result = fn(currentItem);
    if (result) {
      resultArr.push(currentItem);
    }
  }
  return resultArr;
};
