// find方法
// 返回第一个满足条件的元素值，没有满足条件的就返回返回undefined
Array.prototype.myFind = function (fn) {
  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i]);
    if (result) {
      return this[i];
    }
  }
  // 其实函数没有返回值，默认会是undefined
  return undefined;
};
