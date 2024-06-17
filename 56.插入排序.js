// 插排：逐步构建有序序列
// 默认第1个元素是有序的,从第一个开始遍历无序序列，取一个元素和有序序列的每一个元素比较，如果有序序列的元素更大，就这个元素插到它前面。

const insertSort = function (arr) {
  // 1. 从前往后遍历无序序列
  for (let i = 1; i < arr.length; i++) {
    // 取一个当前元素
    const curItem = arr[i];
    let j = i - 1;

    // 2. 从后往前遍历有序序列
    while (j >= 0 && arr[j] > curItem) {
      // 取一个有序元素
      // 3. 比较当前元素和取出来的无序元素，如果无序元素要更大，则将当前元素插入到该无序元素前面
      // 如何实现呢？3.1 比较当前元素和取出来的无序元素,将更大的元素后移一位，空出一个地方放当前元素
      arr[j + 1] = arr[j]; // 后移一位
      j--;
    }

    // 3.2 在空出来的地方放当前元素
    arr[j + 1] = curItem;
  }

  return arr;
};

let arr = [3, 1, 8, 2];
console.log(insertSort(arr));

// console.log(arr);
