// 静态属性 setter getter
class Person8 {
  constructor(private _dickSize: number) {}
  get dickSize() {
    return this._dickSize;
  }

  set dickSize(size: number) {
    this._dickSize = size
  }
}

const person8 = new Person8(24)
console.log(person8.dickSize)

person8.dickSize = 30
console.log(person8.dickSize)

// 单列模式
class SingerInstance {
  // 私有化constructor 外部调用无法实例化对象
  private constructor() {}
  // 类属性
  private static instance: SingerInstance
  // 类方法
  static getInstance() {
    if (!this.instance) {
      SingerInstance.instance = new SingerInstance()
      return SingerInstance.instance
    }
    return SingerInstance.instance
  }
}

const demo = SingerInstance.getInstance()
const demo2 = SingerInstance.getInstance()

console.log(demo === demo2)
