"use strict";
// 基础类型
// null undefined, symbol, boolean, void
var num2 = 123;
var str = 'string';
// 对象类型 Object []
var teacher = {
    name: 'hilary',
    age: 29
};
var arr = [1, 2, 3, 4];
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    return Person2;
}());
var p2 = new Person2();
var fun = function () { return 123; };
