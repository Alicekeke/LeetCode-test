// 缓存算法，浏览器缓存机制
// 按照容量分配存储的算法
function LRUCache(title){
  //构造函数
  // 构造类的属性 this指针 给对象添加属性
  this.title = title;
  this.prototype.sayHello = function() {
    console.log('hello~')
}
}
//静态方法 方法属于类 不属于对象
// this.sayHello = function() {
//   console.log('hello~')
// }
//原型链
// LRUCache.prototype.sayHello = function(){
//   console.log('hhh');
// }
// 对象、实例
let cache = new LRUCache('zzz');
console.log(cache.sayHello());
// LRUCache.sayHello();
// 实例化的对象继承了类的原型链
console.log(cache._proto_ == LRUCache.prototype);
console.log(cache instanceof LRUCache);