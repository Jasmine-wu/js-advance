// fn支持四个参数:acc,curItem, curIndex,arry
// reduce函数两个参数: fn, initialValue:累计初始值,如果没有，数组的第一个为初始值
// 每一项都应fn，并把每一次执行fn的结果作为输入

Array.prototype.myReduce = function (fn) {
  let total = this[0];
  let starIndex = 0;
  if (arguments.length >= 2 && arguments[1] !== undefined) {
    // 如果有初始值，则累计器从初始值开始累计否则是数组的第一个元素
    // 并且循环也从第二个元素开始
    total = arguments[1];
    starIndex = 1;
  }
  for (let index = starIndex; index < this.length; index++) {
    const curItem = this[index];
    total = fn(total, curItem, index, this);
  }
  return total;
};
