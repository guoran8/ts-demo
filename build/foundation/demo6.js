"use strict";
// 数组、元组
var numArr1 = [1, 2, 3]; // 类型推断
var numArr2 = [1, 2, 3]; // 类型注解
var numArr3 = [1, 'two', 3];
var arr4 = [undefined];
// 对象类型数组
var Person = { name: 'guoran' };
var arr5 = [Person];
var arr6 = [{ name: 'guoran', age: 8 }];
var Teacher = /** @class */ (function () {
    function Teacher(name, major) {
        this.name = name;
        this.major = major;
    }
    return Teacher;
}());
var arr7 = [
    new Teacher('hilary', 'life'),
    {
        name: 'guo',
        major: 'happy'
    }
];
// 元组
var teacherInfo = ['hilary', 'male', 29];
var teacherInfoList = [
    ['hilary', 'male', 29],
    ['hilary', 'male', 29],
    ['hilary', 'male', 29],
];
