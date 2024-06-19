const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// 1. set
// const a1 = Array.from(new Set(arr));
const a1 = new Array(...new Set(arr));
// console.log(a1);

// 2. indexof: 返回首次命中元素的下标，咩有命中返回-1
function unique() {
  let newArr = [];
  arr.forEach((item, index) => {
    newArr.indexOf(item) === -1 && newArr.push(item);
  });
  return newArr;
}

console.log(unique(arr));

// 3. filter
function unique2() {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
console.log(unique2(arr));

// 4.includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
function unique3() {
  const newArr = [];
  arr.forEach((item, index) => {
    if (!newArr.includes(item)) newArr.push(item);
  });
  return newArr;
}
console.log(unique3(arr));
