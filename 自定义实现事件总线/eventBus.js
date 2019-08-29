// 2.要有个事件总线的对象，使得三个事件方法通过该对象调用
// 1.要有个存储事件类型及其对应的回调函数的容器，因为一个事件可能对应多个回调函数，多个回调函数以数组形式存在
// 绑定事件 on(eventName,listener)    解绑事件 off(eventName)    分发事件 emit(eventName,data)  


// on('add',f1) on('add',f2)
//{'add':[listener1,listener2],'delete':[listener3]}



(function (window) {
  // 定义一个事件总线对象
  const EventBus = {}
  // 定义个存储事件类型及其对应的回调函数的容器，该容器以对象形式存在
  let listenerContainer = {}


  // 绑定事件的方法
  EventBus.on = function (eventName, listener) {
    // 根据事件的名字，获取listenerContainer对象容器里该事件对应的回调函数的数组
    let listeners = listenerContainer[eventName]
    // 判断该事件对应的回调函数数组里是否为空
    if (!listeners) {

      listeners = [] // 数组为空
      listenerContainer[eventName] = listeners // 往事件对应的回调函数中添加一个空数组
    }
    //若数组不空 将回调函数添加到数组
    listeners.push(listener)

  }

  // 分发事件的方法
  EventBus.emit = function (eventName, data) {
    // 先根据事件的名字获取对应的回调函数的数组容器
    let listeners = listenerContainer[eventName]
    // 存储回调函数的这个数组存在
    if (listeners && listeners.length > 0) {
      // 存储回调函数的这个数组存在,则遍历该数组
      listeners.forEach(listener => {
        listener(data) // 分发数据
      })
    }
  }


  // 解绑事件的方法
  EventBus.off = function (eventName) {
    // 判断eventName是否存在
    if (eventName === undefined) {

      // 如果不存在 解绑所有的事件
      listenerContainer = {}
    } else {
      // 解绑指定的事件
      delete listenerContainer[eventName]
      // 或者
      // listenerContainer[eventName] = []
    }
  }
  // 暴露该对象
  window = window.EventBus
})(window)