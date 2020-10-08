"use strict";
// 基础类型 number string boolean void undefined symbol null
// 对象类型 {} Class function []
// 定义、赋值分开写,无法自动类型推断
var num;
num = 123;
// 函数定义
var fun1 = function (str) {
    return parseInt(str, 10);
};
// 冒号后面是类型, 等号后面是函数体
var func2 = function (str) { return parseInt(str, 10); };
var rawData = '{ "name":"guoran" }';
// 类型推到为any
var newData = JSON.parse(rawData);
var temp = 123;
temp = '123';
