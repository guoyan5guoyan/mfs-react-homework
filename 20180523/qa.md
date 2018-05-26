# 问答题
## 1. babel 是什么，我们为什么要使用 babel？
* babel是一个编译器，可以将es6转为es5代码。
* 使用babel，就可以放心使用es6编写程序，而不用担心现有环境是否支持。

## 2. 我们使用 babel 把 es6 的代码编译为 es5代码后，为什么还需要引入 polyfill？
* 不同浏览器支持的功能不同，为了弥补功能之间的差异，需要编写一些脚本，这些脚本就是polyfill。
* 例如，针对html5的storage，不同浏览器或不同版本，有的支持，有的不支持。针对该现象，有人开发相应的polyfill，只要把相应的polyfill引入相应的程序中，该程序就能支持tml5的storage了。
* 在程序中引入polyfill的方法，简单讲就是：写些代码判断当前浏览器是否支持该功能，如果不支持的话，则引入相应的polyfill。

## 3. 如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
* 输出：
```
undefined

```
* 等效代码：
```
var v
v ='Hello World'
(function(){
    var v
    console.log(v)
    v ='I love you'
})()
```

## 4.如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
* 输出：
> [Function: foo]
> 10
> 10
* 等效代码：
```
function main(){
    var foo = function foo(){ 
        console.log("我来自 foo")
    }    
    console.log(foo)      // ?
    foo = 10
    console.log(foo)      // ?
    console.log(foo)      // ?
}
main()
```
## 5.如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
* 输出：
> undefined
> 20
> undefined
> 30
> 20
* 等效代码：
```
var a = 10;
function main(){
    function fnMy(){
        var a;
        console.log(a);     // ?
        a = 30;
        console.log(a);     // ?
    };
    var a;
    console.log(a);        // ?
    a = 20;
    console.log(a);        // ?
    fnMy();
    console.log(a);        // ?
}
main()

```

## 6. 为什么点击所有的button打印出来的都是5而非0,1,2,3,4？要怎么修改？
* 因为变量 i 被提升，成为了全局变量。当点击button后打印时，i 已经成了 5 ，所以点击所有button打印出来的都是5。
* 应该使用 let 限制 i 的作用域，如下
> for(let i=0;i<buttons.length;i++){
    ......
}

## 7. 什么是解构？数组解构是什么？
* ES6 允许按照一定模式，使用类似数组或对象字面量的语法将数组和对象的属性赋给各种变量,这被称为解构（Destructuring）。
* 从数组和对象中提取值，对变量进行赋值，这被称为数组解构。

## 8. 什么是解构默认值？怎样使用？
* 当没有解构成功或者没有赋予实际意义的数值时,会启用解构默认值。
例如：
```
var [foo = true] = [];
foo // true

[x, y = 'b'] = ['a']; // x='a', y='b'
[x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```

## 9. 下面代码执行会报错吗？为什么？
* 会报错
* 因为 let 不允许重复声明

## 10. 下面代码执行结果是什么？会报错吗？
* 执行结果：
```
> a
'foo'
> b
'bar'
```
* 不会报错

## 11. 下面代码声明了几个变量？值是多少？
* 声明了1个变量,c
* c = 1

## 12. 数组解构的核心是什么？请自学 Generator 函数 回答下面代码返回什么
* 数组解构的核心是模式匹配，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
* first = 1  
  second = 2  
  third = 3  
  fourth = 4  
  fifth = 5  
  sixth = 6

## 13. 字符串可以解构吗？结合下面代码说说为什么？
* 字符串可以解构
* 字符串相当于数组，下面代码的结果相当于如下赋值结果
  a=h
  b=e
  l=l
  d=l
  e=o

## 14. 什么是箭头函数？它和 function 声明的函数有什么区别？
* 箭头函数基本语法如下：
```
(参数1, 参数2, …, 参数N) => { 函数声明 }
(参数1, 参数2, …, 参数N) => 表达式（单一）
//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

// 当只有一个参数时，圆括号是可选的：
(单一参数) => {函数声明}
单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
() => {函数声明}
```
* 和 function 声明的函数相比较，函数更简短，而且不绑定自己的this，arguments，super或 new.target
## 15. 下面代码输出的是什么？为什么？
```
var a = 2
var obj = {
a : 1,
fun : function () {
  console.log(this.a)
}
}
var obj2 ={
a : 3
}
obj.fun()          // this是对象obj，所以输出1
var fun = obj.fun;
fun()              // this是windows，所以输出2
obj2.fun = obj.fun
obj2.fun()         // this是对象obj2，所以输出3
```
## 16.下面代码输出的是什么？为什么？
```
var a = 2
var obj = {
a : 1,
fun : () => {
  console.log(this.a)
}
}
var obj2 ={
a : 3
}
obj.fun()          // this是windows，所以输出2
var fun = obj.fun;
fun()              // this是windows，所以输出2
obj2.fun = obj.fun
obj2.fun()         // this是windows，所以输出2
```
## 17. 箭头函数的this静态绑定是什么含义？和this的动态绑定有什么区别？请写出示例代码说明区别
* 箭头函数的this静态绑定指，this所在的函数定义在哪个对象下，this就被绑定到哪个对象上。如果有对象嵌套的情况，则this绑定到最近的一层对象上。
* this的动态绑定指，function创建的函数中 this 被绑定在调用该函数的对象中。
* 静态绑定代码示例：
```
var obj1={  
    num:4,  
    fn:function(){  
        setTimeout(() => {  
            console.log(this.num);  
        });  
    }  
}  
obj1.fn();  //4，this被定义在obj1中，因此已经被赋值4
```
* 动态绑定代码示例
```
var obj={  
    num:3,  
    fn:function(){  
        setTimeout(function(){  
            console.log(this.num);  
        });  
    }  
}  
obj.fn();   //undefined，因为this被动态绑定到调用匿名函数的对象上，即windows，而numthis在windows中没有被赋值
```

## 18. 下面代码输出是什么？结合前几题，试理解this静态绑定的绑定规则。
* 输出
> 1
* 通过call方法把箭头函数的this绑定到了 {id:1} 对象上

## 19.对于function声明的函数，如果想实现箭头函数的this静态绑定，需要怎么做？
* 当函数通过Function对象的原型中继承的方法 call() 和 apply() 方法调用时， 其函数内部的this值可绑定到 call() & apply() 方法指定的第一个对象上， 如果第一个参数不是对象，JavaScript内部会尝试将其转换成对象然后指向它。因此可以使用call方法将function声明的函数绑定到对象上，从而把function声明函数里的箭头函数的this绑定到call方法指定的对象上。

## 20. 什么是柯里化(currying)，它有什么作用？
* Currying(柯里化) 是把一个接受 N 个参数的函数转换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。也就是说每个函数都接受1个参数。

## 21. 下面代码输出的是什么？为什么？
```
let fun1 = i => i*2
let fun2 = i => {i*2}
console.log(fun1(1))   // 2，箭头函数返回 1*2=2
console.log(fun2(1))   // undefined，大括号会被解释成代码块，其中需要用 return 返回结果。因此fun2只被声明了，没有返回值
```

## 22. 以下递归函数在调用 factorial(50000)时会报错么？如果会，应该如何修改此函数（改造后的函数还需为递归函数），使其满足尾递归性质而不会栈溢出。
* 会报错，栈溢出
* 修改i后
```
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
} 
```


# 代码题
https://github.com/guoyan5guoyan/mfs-react-homework/tree/master/20180515