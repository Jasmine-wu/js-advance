// 一定频率触发一次。
function throttle(fn, delay) {
  let time = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.call(this);
      timer = null;
    }, delay);
  };
}
