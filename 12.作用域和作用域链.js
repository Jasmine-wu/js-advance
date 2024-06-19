// 所谓变量提升，是将变量的声明提升到函数顶部的位置，也就是将变量声明提升到变量所在的作用域的顶端，而变量的赋值并不会被提升。
// 1.
// var a = 1;
// function fn1() {
//   function fn3() {
//     function fn2() {
//       console.log(a);
//     }
//     var a;
//     fn2();
//     a = 4;
//   }
//   var a = 2;
//   return fn3;
// }
// var fn = fn1();
// fn(); //undefined

// 2.
// var str = "hello world";
// (function () {
//   console.log(str);
//   var str = "hello vue";
// })(); // undefined

//3. undefined
// var str = "hello world";
// (function () {
//   var str; //变量的声明得到提升
//   console.log(str);
//   str = "hello vue"; // 变量的赋值没有得到提升
// })();

// 4. str is not defined
// (function () {
//   console.log(str);
//   str = "hello vue";
// })();

// 5. ❤️
// var a = true;
// function foo提升了
// foo();
// function foo() {
//   //  块语句是没有块作用域的，因此var a会变量提升
//   if (a) {
//     var a = 20;
//   }
//   console.log(a); // undefined
// }

// 6.
// var a;
// a = true;
// function foo() {
//   var a;
//   if (a) {
//     a = 20;
//   }
//   console.log(a);
// }
// foo(); // undfined

// 7. ❤️
// function fn() {
//   console.log(typeof foo); // function
//   var foo = "hello";
//   function foo() {
//     return "abc";
//   }
//   console.log(typeof foo); // string
// }
// fn();
// 上面代码相当于
// function fn() {
//   console.log(typeof foo); // function
//   var foo = "hello";
//   function foo() {
//     return "abc";
//   }
//   console.log(typeof foo); // string
// }
// fn();
