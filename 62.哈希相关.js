// 1. 找到数组中两个数，他们之和等于给定值。返回两个数的索引

//  重点：计算差值，在map中查找差值是否存在,将当前数和索引存入map中
const sum2 = function (arr, sum) {
  const map = {};
  for (let index = 0; index < arr.length; index++) {
    // 看sum和当前数的差值在不在map中
    const value = sum - arr[index];
    // 如果在map中，则返回这两个数的索引
    if (map.hasOwnProperty(value)) {
      return [map[value], index];
    } else {
      // 不在，将数值和索引存入map
      map[arr[index]] = index;
    }
  }
};

console.log(sum2([1, 3, 5, 3, 3], 8));

// 2. 找到数组中三个数，他们之和等于给定值
// 3. 找到最长不要重复子串
