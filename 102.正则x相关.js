// 字符串分割
var s = "112ab3c22d";
const arr = s.split(/\d/);
console.log(arr); // ['', '', '', 'ab', 'c', '', 'd']
console.log(arr[3], arr[4]); // ab c

var s = "12ab3cd";
const arr2 = s.split(/\d/); // ['', '', 'ab', 'cd']
console.log(arr2);
console.log(arr2[3], arr2[4]); // cd undefined
