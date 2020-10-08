"use strict";
var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var p = {
    name: 'hilary',
    sex: 'male',
    weight: 126,
    say: function () {
        console.log('say method');
        return 'say';
    }
};
getPersonName(p);
// 字面量的赋值会进行强校验每个属性
// 使用变量传参,不会进行每个属性的强校验
getPersonName({
    name: 'hilary',
    sex: 'male',
    weight: 123,
    say: function () {
        return 'call say';
    }
});
setPersonName(p, 'guoran');
// 当类应用接口时,要求类中必须含有接口定义的属性
var User = /** @class */ (function () {
    function User(name, sex, weight) {
        this.name = name;
        this.sex = sex;
        this.weight = weight;
    }
    User.prototype.say = function () {
        return 'say method';
    };
    return User;
}());
var say = function (name) { return name; };
