// fn.myCall(obj,arg1,arg2,...)
// 作用：
// 1. 传入参数，执行fn
// 2. 将fn内部的this指向context
// 3. 返回fn执行结果

// 思考：如何将函数函数内部的this指向context？
// 因为this会指向调用者，也就是让context去调用fn
// 问题转化成：如何让context调用fn？将fn保存到context某个属性attr上。
// 通过context[attr]()调用
Function.prototype.myCall = function (context, ...args) {
  // 使用symbol值，防止和context自身属性的命名冲突
  const fn = Symbol("__myCallFn_");
  // 保留fn
  context[fn] = this;
  // 执行fn
  const result = context[fn](...args);
  // 返回执行结果
  return result;
};
