// 随机选中一个基准元素，将数组分成左右两个序列，左边序列都是小于基准值的元素，右边都是大于基准值的元素
// 对左右序列递归上面这个过程

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  // const pivot = arr[pivotIndex];
  // 数组要剔除pivot
  // splice方法:剔除元素，返回的包含剔除元素的数组
  const pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}
let arr = [3, 1, 8, 2, 6, 2, 333, 2, 2, 10];
console.log(quickSort(arr));
