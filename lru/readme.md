### LRU缓存机制题解 

  #### 思考
    - 存放键值对 -> 数组:可以方便地形成一个栈，
    - [0] 元素是可以被删除的
    - 获取数组中的值，否则返回-1
    - 缓存满时，什么时候释放不常用数据？
    - 在哪释放？

  #### 用到的方法
  - pop() ：删除或返回数组中最后一个元素
  - unshift() ：向数组开头添加元素，返回新的长度
  - splice() ：删除从 index 处开始的n(n>=0)个元素,返回被删除的项目
  - indexof() ：返回某个指定的字符串值在字符串中首次出现的位置
  - instanceof 获得的某个对象是否为该类的实例
  

#### 数据结构与实现
  function LRUCache(capacity) 类的构造函数 定义了一个类 类中初始化对象数组

  new LRUCache 实例化

  LRUCache.prototype.get/put ：分别在LRUCache构造函数原型中添加get/put方法

  - put: 若传来的key值已在数组中存在，更新值，按key找到对应旧的value的下标，删除元素，返回新的数组长度
  若栈满：判断栈满否，满则出栈，重置出栈的值为undefined
  再更新键值，返回新的数组长度。
  ```
  LRUCache.prototype.put = function(key,value){
  //如果是修改操作，刷新数据
  if(this.obj[key]){
    //已存在
    this.obj[key] = value;//更新值
    // 调整它的优先级，判断在那个位置，删除，移到最前面 (尝试先写伪代码)
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);//splice 根据下标删除多少个
    this.arr.unshift(key);
    return;
  }

  //判断容量是否溢出
  if (this.capacity === this.arr.length){
    //放满了
    var k = this.arr.pop();
    //让出去的值取不到
    this.obj[k] = undefined;
  }
  this.obj[key] = value;
  this.arr.unshift(key);    //修改原有数组，插入到数组头部，认为最前面是最优先
}
```

  - get: 首先判断是否为空，空值返回-1；否则按传来的下标出栈，更新数组。
  ```
  LRUCache.prototype.get = function(key){
  var val = this.obj[key];
  // 没有值 返回-1
  if(val){
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);
    return val;
  }else{
    return -1;
  }
  // 处理优先级
}
```

#### 更多
  有点类似操作系统中的**PV操作**、请求和释放进程资源。

  其中经典的读者和写者问题

  把想读的进程称为“读者”即题中的get、想写的进程称为“写者”即题中的put

  PV操作通过设置信号量的方式解决进程之间同步和互斥的问题

  用双端列表操作结点内存消耗更低。回看补坑


