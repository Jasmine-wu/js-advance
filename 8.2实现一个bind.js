// 1. fn.bind(context, arg1, arg2)
// 2. fn.bind返回新函数，执行新函数时才会执行fn,新函数记得你通过bind方法传入的context和任何预设参数。
// 3. 新函数也支持传入参数(arg1,arg2),新函数传入更多参数，这些参数会跟在预设参数之后
// 4. 返回的新函数支持new，如果支持new，new返回fn函数实例，并传入所有参数

function myCall(context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Excepted a function, but received a " + typeof this);
  }
  // 保留context
  const fn = Symbol("_myApplyFn_");
  context[fn] = this;
  // 执行fn，并将fn你内this指向context
  const result = context[fn](...args);
  delete context[fn];
  return result;
}

function myBind(context, ...bindArgs) {
  if (typeof this !== "function") {
    throw new TypeError("TypeError");
  }

  const self = this;

  return function (...args) {
    // 支持new新函数，返回fn函数实例
    if (this instanceof self) {
      return new self(...bindArgs, ...args);
    }
    return self.myCall(context, ...bindArgs, ...args);
  };
}
