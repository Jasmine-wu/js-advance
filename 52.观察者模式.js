// 观察者模式其实就是：
// 一个变量值发生了改变会自动通知这个变量的观察者们进行最新值更新

let obj = {
  // 需要修改的值
  money: 0,
  // 修改这个变量值的方法
  setMoney(newValue) {
    if (newValue != this.money) {
      // 修改值
      this.money = newValue;
      // 通知所有观察者更新值
      this.observers.forEach((observer) => {
        observer.updateMoney(this.money);
      });
    }
  },
  // 收集观察者么
  observers: [],
};

let observer1 = {
  money: 0,
  updateMoney(money) {
    this.money = money;
    console.log("观察者1获取到了最新值:", money);
  },
};

let observer2 = {
  money: 0,
  updateMoney(money) {
    this.money = money;
    console.log("观察者2获取到了最新值:", money);
  },
};

let observer3 = {
  money: 0,
  updateMoney(money) {
    this.money = money;
    console.log("观察者3获取到了最新值:", this.money);
  },
};

obj.observers.push(observer1);
obj.observers.push(observer2);
obj.observers.push(observer3);
obj.setMoney(1000);
