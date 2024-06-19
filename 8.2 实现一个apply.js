Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("context must be a function");
  }

  const fn = Symbol("__myFn__");
  context = context || window;
  context[fn] = this;
  return context[fn](...arguments[1]);
};

function Add(num1, num2) {
  console.log(this);
  console.log(num1 + num2);
}
function Sub(num1, num2) {
  console.log(num1 - num2);
}
Add.myApply(Sub, [6, 3]);
