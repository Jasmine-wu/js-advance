const bubbleSort = (arr) => {
  //注意：使用arr.length - 1避免最后多余比较
  // 因为第一轮冒泡以后最后一个就是最大值了。
  // 遍历数组
  for (let i = 0; i < arr.length - 1; i++) {
    // 从第i数开始，比较相邻两个数
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 如果前面的 > 后面的， 则交换位置
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// 测试选择排序
let testArray = [5, 3, 8, 6, 2, 7, 1, 4];
console.log("原始数组:", testArray);
console.log("排序后数组:", bubbleSort(testArray));
