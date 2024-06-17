// 分为已排序和未排序两个序列
// 默认第一个元素是排序好的
// 从第二个元素开始重复：
// 1.取出当前未排序元素
// 2.从已排序最后一个元素开始向前比较，如果要小，插入到当前未排序元素前

const insertSort = function (arr) {
  // 遍历未排序序列
  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    let j = i - 1;
    // 遍历已排序序列
    while (j >= 0 && arr[j] > item) {
      arr[j - 1] = item;
      j--;
    }
  }
};
