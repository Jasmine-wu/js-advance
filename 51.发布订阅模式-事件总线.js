// 1. 观察者模式/发布订阅模式都是在讲一对多（a/bcd）关系里他们之间是如何通信的
// 2. 观察者模式：两者直接通信。（被观察会收集观察者，一旦被观察的数据变化变化，被观察者会主动通知收集的观察者们更新数据）
// 3. 发布订阅模式：两者不直接通信，两者互不知道对方，通过一个调度中心通信。（事件中心在订阅时收集事件和回调函数，发布时，执行事件对应的回调函数并把数据传递回去）
// 4. 发布订阅模式更解耦合。

// 发布订阅中心
class EventBus {
  constructor() {
    this.map = {}; // 存储事件和对应多个回调函数
  }

  // 发布者
  $emit(eventName, data) {
    // 发布事件的时候，执行对应的回调函数,将事件的数据传递过去
    if (this.map[eventName]) {
      this.map[eventName].forEach((callBack) => {
        callBack(data);
      });
    }
  }
  // 订阅者
  $on(eventName, callBack) {
    // 订阅的时候事件中心会收集事件和回调函函数
    if (!this.map[eventName]) {
      this.map[eventName] = [];
    }
    this.map[eventName].push(callBack);
  }
}

const eventBus = new EventBus();
eventBus.$emit("click", "你好啊");
eventBus.$on("click", (data) => {
  console.log(data);
});
eventBus.$on("click", (data) => {
  console.log(data);
});
