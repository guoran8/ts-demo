"use strict";
// class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person7 = /** @class */ (function () {
    function Person7() {
        this.name = 'hilary';
    }
    Person7.prototype.getName = function () {
        return this.name;
    };
    return Person7;
}());
var person = new Person7();
console.log(person.getName());
// 类 继承
var Teacher7 = /** @class */ (function (_super) {
    __extends(Teacher7, _super);
    function Teacher7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 重新父类方法
    Teacher7.prototype.getName = function () {
        // 调用父类的方法
        return _super.prototype.getName.call(this) + ' in teacher class';
    };
    Teacher7.prototype.getTeacherName = function () {
        return this.name;
    };
    return Teacher7;
}(Person7));
var teacher7 = new Teacher7();
console.log(teacher7.getTeacherName());
console.log(teacher7.getName());
// public private protected 访问类型
// 默认类方法和属性是public, 允许类外部调用
// private 只允许在类中使用
// protected 允许内中或子类中使用
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
        this.wife = '';
        this.tool = 'computer';
    }
    return Person3;
}());
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Friend.prototype.hobby = function () {
        console.log(this.tool);
        // console.log(this.wife)
    };
    return Friend;
}(Person3));
var person3 = new Person3('hilary');
person3.name = 'guoran';
console.log(person3.name);
console.log(person3);
console.log('--------------');
var friend = new Friend('guo');
friend.hobby();
console.log('----------- constructor -----------');
var Person4 = /** @class */ (function () {
    // constructor(name: string) {
    //   this.name = name
    // }
    // name: string
    // short way
    function Person4(name) {
        this.name = name;
    }
    return Person4;
}());
var p4 = new Person4('hilary');
console.log(p4.name);
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy(age) {
        // 执行父类构造函数
        return _super.call(this, 'unknown') || this;
    }
    return Boy;
}(Person4));
var boy = new Boy(8);
