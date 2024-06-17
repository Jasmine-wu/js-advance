//  只要有一项满足条件就返回true，没有一项满足就返回false
Array.prototype.some = function (fn) {
  for (let index = 0; index < this.length; index++) {
    const currentItem = this[index];
    const result = fn(currentItem);
    if (result) {
      return true;
    }
  }
  return false;
};
