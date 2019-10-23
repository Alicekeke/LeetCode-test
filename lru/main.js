/**设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
* 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
* 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。
* 当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
 */

function LRUCache(capacity) {
  this.capacity = capacity;//容量
  this.obj = {};// get put 存储数据
  this.arr = [];//优先级
}

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

let cache = new LRUCache(2);
console.log(cache.capacity);
cache.put(1,1);
cache.put(2,2);
cache.put(3,3);

console.log(cache.get(1));
console.log(cache.arr,cache.obj)