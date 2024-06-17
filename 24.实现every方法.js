// 每一项都满足条件就返回true，否则就返回false
Array.prototype.myEvery = function (fn) {
  for (let index = 0; index < this.length; index++) {
    const currentItem = this[index];
    const result = fn(currentItem);
    if (!result) {
      return false;
    }
  }
  return true;
};
