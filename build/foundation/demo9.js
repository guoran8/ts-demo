"use strict";
// 静态属性 setter getter
var Person8 = /** @class */ (function () {
    function Person8(_dickSize) {
        this._dickSize = _dickSize;
    }
    Object.defineProperty(Person8.prototype, "dickSize", {
        get: function () {
            return this._dickSize;
        },
        set: function (size) {
            this._dickSize = size;
        },
        enumerable: false,
        configurable: true
    });
    return Person8;
}());
var person8 = new Person8(24);
console.log(person8.dickSize);
person8.dickSize = 30;
console.log(person8.dickSize);
// 单列模式
var SingerInstance = /** @class */ (function () {
    // 私有化constructor 外部调用无法实例化对象
    function SingerInstance() {
    }
    // 类方法
    SingerInstance.getInstance = function () {
        if (!this.instance) {
            SingerInstance.instance = new SingerInstance();
            return SingerInstance.instance;
        }
        return SingerInstance.instance;
    };
    return SingerInstance;
}());
var demo = SingerInstance.getInstance();
var demo2 = SingerInstance.getInstance();
console.log(demo === demo2);
