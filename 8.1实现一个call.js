// 参数1: context
// 参数2: 参数分别传入
// fn.myCall(obj, 1,2,3)
// 调用fn并将fn函数里的this指向context
Function.prototype.myCall = function (context, ...args) {
  // 保留fn, 属性名要设置的特别一点，防止跟context自身的属性冲突
  const fn = Symbol("__myCallFn_");
  context[fn] = this; // 为什么要保留成context的一个属性？
  // 执行fn
  // 为了让context调用fn, 这样fn内部的this就指向了context
  const result = context[fn](...args);
  delete context[fn];
  return result;
};
