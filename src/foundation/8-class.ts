// class

class Person7 {
  name = 'hilary'
  getName() {
    return this.name;
  }
}

const person = new Person7()
console.log(person.getName())

// 类 继承
class Teacher7 extends Person7 {
  // 重新父类方法
  getName() {
    // 调用父类的方法
    return super.getName() + ' in teacher class'
  }
  getTeacherName() {
    return this.name
  }
}

const teacher7 = new Teacher7()
console.log(teacher7.getTeacherName())
console.log(teacher7.getName())

// public private protected 访问类型
// 默认类方法和属性是public, 允许类外部调用
// private 只允许在类中使用
// protected 允许内中或子类中使用
class Person3 {
  constructor(name: string) {
    this.name = name
    this.wife = ''
    this.tool = 'computer'
  }
  public name: string
  private wife: string
  protected tool: string

  private showVar() {
    console.log(this.wife)
  }
}

class Friend extends Person3 {
  hobby() {
    console.log(this.tool)
    // console.log(this.wife)
  }
}

const person3 = new Person3('hilary')
person3.name = 'guoran'
console.log(person3.name)
console.log(person3)

console.log('--------------')
const friend = new Friend('guo')
friend.hobby()

console.log('----------- constructor -----------')

class Person4 {
  // constructor(name: string) {
  //   this.name = name
  // }
  // name: string

  // short way
  constructor(public name: string) {}
}

const p4 = new Person4('hilary')
console.log(p4.name)

class Boy extends Person4 {
  constructor(age: number) {
    // 执行父类构造函数
    super('unknown');
  }
}

const boy8 = new Boy(8)
