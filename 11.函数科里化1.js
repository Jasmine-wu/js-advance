// 函数科里化是函数式编程的一种技术。
// - 用于将一个接受多个参数的函数转化成一系列函数。
// - 每个函数接受单个参数并返回下一个函数。
// - 直到所有参数都被提供，返回最终结果。

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add.length);

function curry(fn) {
  function inner(...args) {
    if (args.length == fn.length) return fn(...args);
    return function (...nextArgs) {
      return inner(...args, ...nextArgs);
    };
  }
  return inner;
}

// 科里化add函数
const curryAdd = curry(add);
console.log(curryAdd(1)(2));
