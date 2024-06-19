// 找到数组中出现次数最多的元素和次数
const fn = function (arr) {
  let obj = {};
  let maxCount = 0; // 出现次数
  let maxItem = null; // 出现次数最多的元素

  // 归纳成map的形式
  for (let index = 0; index < arr.length; index++) {
    let item = arr[index];
    if (obj[item] == undefined) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    // 比较map里的value值和maxCount的大小
    if (obj[item] > maxCount) {
      maxCount = obj[item];
      maxItem = item;
    }
  }

  return { maxItem, maxCount };
};

var array = [1, 2, 3, 3, 3, 6, 6, 6, 6, 6, 7, 8, 9];
console.log(fn(array));
