class Persion{
    constructor(name, age){
        console.log();
        this.age = age;
        this.name = name;
    }
    say() {
        console.log('这是 Persion 中的 say方法');
    }
    static  info = 123;
}

// 使用 extends 实现继承，extends 前面的是子类，后面的是父类
class Chinese extends Persion{
    constructor(name, age ,color, language){
        console.log(1);
        // 注意：当使用 extends 关键字实现了继承， 子类的 constructor 构造函数中，必须显示调用super()
        // 方法，这个super 表示父类的 constructor 的引用
        super(name, age)
        this.color = color;
        this.language = language;
        console.log(2);
    }
}

var p1 = new Persion('zs','18')
console.log(p1);
var p2 = new Chinese('张三', 16 ,'黄色','中文')
console.log(p2);
p2.say();
console.log(Chinese.info);


// 真正的面向对象的语言 是由三部分组成：封装、继承、多态

// 多态 和 接口、虚拟方法有关
class Animal {
    // 父类只定义了其方法名称和作用，但是并没有具体的实现逻辑
    say(){

    }
}

class Cat extends Animal{
    // 自雷继承了父类之后，必然要继承父类的方法，但是，发现say方法空有其壳，如果子类
    // 想调用say方法，必须自己先实现这个方法，才能调用：
    say(){
        console.log('喵喵');
    }
}

class Dog extends Animal{
    say(){
        console.log('汪汪');
    }
}