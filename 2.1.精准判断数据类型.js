function getType(data) {
  // 调用Object.prototype上的toString方法，精准判断数据类型
  // slice： 截取第9位到倒数第二位的字符
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
