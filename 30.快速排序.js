// 基本思想：
// 选择一个基准pivot元素，将序列分成左右两部分，左边都存放小于pivot，右边都大于pivot
// 递归这个过程

// 优化：
// 1. 如何避免最坏情况：O(n^2)，即数组是已排序/逆序序列

// 简单但低效的实现：
// const quickSort = (arr) => {
//   // 递归出口
//   if (arr.length <= 1) return arr;
//   // 选择一个基准值
//   const pivotIndex = Math.floor(arr.length / 2);
//   const pivot = arr[pivotIndex];
//   // 左边序列
//   const left = arr.filter((x) => x < pivot);
//   // 右边序列
//   const right = arr.filter((x) => x > pivot);

//   // 中间
//   const middle = arr.filter((x) => x === pivot);

//   return [...quickSort(left), ...middle, ...quickSort(right)];
// };

// 优化: 避免额外的数组创建
// const quickSort = (arr) => {
//   // 递归出口
//   if (arr.length <= 1) return arr;

//   // 选择一个基准值
//   const pivotIndex = Math.floor(arr.length / 2);
//   // 移除基准并获取
//   const pivot = arr.splice(0, 1)[0];

//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// };

// 再优化：
// 1.不创建新的数组，而是元素交换元素
// 2.pivot取值要均衡，避免最坏的情况导致的性能退化O(n^2), 比如已排序序列，大量重复数据分布在某一端
// 3.数组长度<10 时切换到插入排序
// 测试选择排序

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // 递归退出条件
  if (left >= right) return;
  // 三数取中选取基准值：起始index和中间index比较取中位数
  let mid = Math.floor((right - left) / 2);
  if (arr[left] > arr[mid]) {
    [arr[left], arr[mid]] = [arr[mid], arr[left]];
  }
  if (arr[left] > arr[right]) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  if (arr[mid] > arr[right]) {
    [arr[mid], arr[right]] = [arr[right], arr[mid]];
  }
  const pivot = arr[mid];
  console.log(pivot);

  // 分区:
  let i = left;
  let j = right - 1;
  // 左右两个指针
  while (i <= j) {
    //从左到右遍历， 找到大于pivot的元素
    while (arr[i] < pivot) i++;
    // 从右到左遍历，找到大于pivot的元素
    while (arr[j] > pivot) j--;
    if (i <= j) {
      // 交换i，j元素位置
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  // 递归排序左右两侧
  quickSort(arr, left, j);
  quickSort(arr, i, right);
};

// 使用示例
let exampleArray = [8, 4, 23, 42, 16, 15];
quickSort(exampleArray);
console.log(exampleArray); // 输出排序后的数组
