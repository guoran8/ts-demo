"use strict";
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
// readonly 属性
var Person10 = /** @class */ (function () {
    function Person10(name) {
        this.name = name;
    }
    return Person10;
}());
var person10 = new Person10('hilary');
// person10.name = 'test'
console.log(person10.name);
// 抽象类(只能被继承不能实例化)
var Geom = /** @class */ (function () {
    function Geom() {
        this.width = 123;
    }
    Geom.prototype.getType = function () {
        return 'Geom';
    };
    return Geom;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.getArea = function () {
        return 123;
    };
    return Circle;
}(Geom));
var circle = new Circle();
console.log(circle.getArea());
console.log(circle.width);
