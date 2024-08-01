// 选择排序基本思想:
// 每次从未排序的部分选择最小（或最大）的元素，然后将其放到已排序部分的末尾。
// 找到最小元素： 遍历未排序部分，找到最小的元素。
// 交换位置： 将最小元素与未排序末尾元素交换位置，将其放到已排序部分的末尾。
// 重复： 重复以上步骤，直到所有元素都被排序。

const selectSort = (arr) => {
  // lenght -1 可以避免在最后一次迭代时，实际上已经没有必要再去找“剩余部分”的最小值了，因为只剩下一个元素，它自然就是最小的
  // 遍历整个数组
  for (let i = 0; i < arr.length - 1; i++) {
    // 假设当前值是最小值
    let minIndex = i;

    // 遍历未排序序列，记录最小值下标
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 交换最小值和i的位置
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

// 测试选择排序
let testArray = [5, 3, 8, 6, 2, 7, 1, 4];
console.log("原始数组:", testArray);
console.log("排序后数组:", selectSort(testArray));
