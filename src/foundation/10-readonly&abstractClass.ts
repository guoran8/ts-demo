// readonly 属性
class Person10 {
  // private _name: string;
  readonly name: string;
  constructor(name: string) {
    this.name = name
  }
  // get name() {
  //   return this._name
  // }
}

const person10 = new Person10('hilary')
// person10.name = 'test'
console.log(person10.name)

// 抽象类(只能被继承不能实例化)
abstract class Geom {
  public width: number = 123;
  getType() {
    return 'Geom';
  }
  // 抽象方法,只定义不确定实现
  abstract getArea(): number
}

class Circle extends Geom {
  getArea() {
    return 123;
  }
}

const circle = new Circle()
console.log(circle.getArea())
console.log(circle.width)

