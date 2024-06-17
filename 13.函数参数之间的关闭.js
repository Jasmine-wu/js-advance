function side(arr) {
  console.log("arr--：", arr);
  arr[0] = arr[2];
  console.log("arr--：", arr);
}

// 1. 形参和arguments对象的关系
// 1.1 非严格模式下，函数内部形参和arguments是引用关系
// function func1(a, b, c) {
//   c = 10;
//   console.log("---:", a, b, c); // 1,2,10
//   console.log("1:", arguments[0]); // 1
//   console.log("arguments", ...arguments);

//   console.log("3:", arguments[2]); // 10
//   side(arguments); // arguments:[10,2,10]
//   // console.log("---:", a, b, c);
//   console.log("arguments", ...arguments);
//   console.log("1:", arguments[0]); // 10
//   console.log("3:", arguments[2]); // 10
//   console.log(a + b + c); // 22
// }

// 1.2.参数带默认值自动开启严格模式：严格模式下，行参和arguments是互相独立的。
function func1(a, b, c = 3) {
  c = 10;
  console.log("---:", a, b, c); // 1,2,10
  console.log("1:", arguments[0]); // 1
  console.log("3:", arguments[2]); // 5
  console.log("arguments", ...arguments); // 1，2，5

  side(arguments);
  console.log("arguments", ...arguments); // 5，2，5
  console.log("---:", a, b, c); // 1，2，10
  console.log("1:", arguments[0]); // 5
  console.log("3:", arguments[2]); // 5
  console.log(a + b + c); // 13
}
func1(1, 2, 5);

// 2.形参和实参的关系
// 3.1 如果实参是基本数据类型，则是值传递。两者互不影响。
// 3.2 如果实参是引用数据类型，则是引用传递。两者互相影响。
var a = 10;
var b = {
  age: 11,
};
function fn(x, y) {
  --y.age;
  return --x;
}
fn(a, b);
console.log(a); // 10
console.log(b); // 10

// 3.
function funcA(x) {
  var temp = 4;
  function funcB(y) {
    console.log(++x + y + temp--);
    // document.write(++x + y + temp--);
  }
  funcB(5);
}
funcA(6);
