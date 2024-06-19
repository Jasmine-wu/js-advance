// 实现5个数的累加
// function sum(a, b, c, d, e) {
// return a + b + c + d + e;
// }
// 用柯里化函数实现5的数的累加
// sum(1)(2)(3)(4)(5)
// sum(1)(2,3)(4)(5)
// sum(1)(2,3,4)(5)
// sum(1)(2,3)(4,5)
// 重点：限制5个数
// let argArr = [];
// const sum = (...args) => {
//   argArr.push(...args);

//   if (argArr.length >= 5) {
//     const total = argArr.slice(0, 5).reduce((sum, item) => sum + item, 0);
//     argArr = [];
//     return total;
//   }
//   return sum;
// };

//优化 :不要有全局变量
// const sum = (...args) => {
//   let argsArr = [...args];
//   const inner = (...arg2s) => {
//     argsArr.push(...arg2s);
//     if (argsArr.length >= 5) {
//       const res = argsArr.slice(0, 5).reduce((acc, value) => acc + value, 0);
//       return res;
//     } else {
//       return inner;
//     }
//   };
//   return inner;
// };
// 长度可设置
const sumMaker = (length) => {
  let argsArr = [];
  const inner = (...arg2s) => {
    argsArr.push(...arg2s);
    if (argsArr.length >= length) {
      const res = argsArr
        .slice(0, length)
        .reduce((acc, value) => acc + value, 0);
      argsArr = [];
      return res;
    } else {
      return inner;
    }
  };
  return inner;
}; // 测试案例 const sum = sumMaker(5);
console.log(sum(1)(5)(3)(4)(5));
console.log(sum(1)(0, 3)(4)(5));
console.log(sum(1)(2, 3, 4)(5)); // console.log(sum(1)(2, 3)(4, 5, 2)(1, 3));
