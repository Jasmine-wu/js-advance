// 用柯里化函数- 不定参
// sum(1)(2)(3)(4)(5)
// sum(1)(2,3)(4)(5)
// sum(1)(2,3,4)(5)
// sum(1)(2,3)(4,5)

const sum = (...args) => {
  let argsArr = [...args];

  const inner = (...arg2s) => {
    argsArr.push(...arg2s);
    if (arg2s.length <= 0) {
      return argsArr.reduce((acc, value) => acc + value, 0);
    } else {
      return inner;
    }
  };

  return inner;
};

console.log(sum(1)(5)(3)(4)(5)(6)());
console.log(sum(1)(0, 3)(4)(5));
console.log(sum(1)(2, 3, 4)(5));
// console.log(sum(1)(2, 3)(4, 5, 2)(1, 3));
