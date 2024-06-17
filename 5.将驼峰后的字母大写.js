const toCamelCase = (name) => {
  // \w: 数字字母和下划线.
  // \\w: 对\w进行转义。
  // (\\w):()是一个捕获组。
  // 正则定义匹配规则，match获取匹配结果，p获取捕获结果。
  return name.replace(new RegExp("-(\\w)", "g"), function (match, p) {
    // return newStr.replace(/-([a-z])/g, function (match, p) {

    return p.toUpperCase();
  });
};
console.log(toCamelCase("get-element-by-id"));
