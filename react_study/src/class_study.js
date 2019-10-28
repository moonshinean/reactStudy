// console.log('ok');
// class实现 面向对象的新形式

function Persion(name, age){
    this.name = name;
    this.age = age;

}
Persion.prototype.say = function(){
    console.log('hello');
}
Persion.info = 123;
var p1 = new Persion('zs', '10')
p1.say()
// console.log();
console.log(Persion.info);

// class 后面跟上类名，；类名后面不需要加 （）， 直接上{}
// 注意 在class 内部只能些方法 或者属性
class   Per {
    //  在每个class类 内部，都有一个 constructor 构造器，如果没有显示定义 构造器，那么类内部默认
    // 都有用一个看不见的constructor
    // constructor 的作用, 就好比 咱们之前的 function persion(){ }
    // 每当。使用new 关键字，创建 class 类实例的时候，必然会优先调用 constructor 构造器
    // constructor(){}
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // 这是实例方法，必须通过new 出来的对象调用
    static info = 123;
    say() {
        console.log('say');
    }
    static sayHello (){
        console.log('hello');
    }
    
}
var p2 = new Per('网哆嗦','123')
p2.say()
console.log(Per);

console.log(Per.info);