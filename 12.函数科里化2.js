function add(sum) {
  let total = sum;
  function inner(...args) {
    // 累加初始值：0
    total += args.reduce((sum, arg) => (sum += arg), 0);
    return args.length === 0 ? total : inner;
  }

  // 重写toString方法，当打印inner对象时会调用
  inner.toString = function () {
    return total;
  };

  return inner;
}

const result = add(1)(2)(3)(4);
console.log(result);

// console.log(add(1)(2)(3)(4));
// console.log(add(1)(1, 2, 3)(2));
