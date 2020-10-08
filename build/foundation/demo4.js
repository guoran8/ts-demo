"use strict";
// 函数
function hello1() { }
var hello2 = function () { };
var hello3 = function () { };
function add(x, y) {
    return x + y; // 类型推断返回值
}
// 没有返回值
function sayHello() {
    console.log('hello');
}
// 不执行到最后
function errorEmitter() {
    throw new Error();
    // console.log('end');
}
// 函数参数解构
function add2(_a) {
    var first = _a.first, second = _a.second;
    return first + second;
}
var total = add2({ first: 123, second: 456 });
