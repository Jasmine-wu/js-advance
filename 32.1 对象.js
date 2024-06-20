// 考察点：
// 1. js对象的属性名会强制toString转换成字符串
// 2. 而object类型toString后会变成"[object Object]"
var a = {};
b = "123";
c = 123;
a[b] = "b"; // a["123"] = "b"
a[c] = "c"; // 属性覆盖:a["123"] 再次被复制=“c”;
console.log(a[b]); // c
// example 2
var a = {};
b = Symbol("123");
c = Symbol("123");
a[b] = "b";
a[c] = "c";
console.log(a[b]); // b
// example 3
var a = {};
b = { key: "123" };
c = { key: "456" };

a[b] = "b"; // a["[object Object]"] = "b";
a[c] = "c"; // 属性覆盖 a["[object Object]"] = "c"
// console.log(c, a[c]);
// 这里a[b], a[c]内部都换用toString()转换成"[object Object]"
console.log(a[b]); // c
console.log(a[c]); // c
