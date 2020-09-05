// interface
// type和interface的区别
// type可以直接代表一个基础类型，interface只能代表一个对象
interface Person {
  name: string,
  age?: number, // 不是必须的属性
  readonly sex: string // 只读属性
  [propName: string]: any // 扩展的属性
  say(): string
}

type otherPerson = string

const getPersonName = (person: Person): void => {
  console.log(person.name)
}

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
}

const p = {
  name: 'hilary',
  sex: 'male',
  weight: 126,
  say(): string {
    console.log('say method')
    return 'say'
  }
}

getPersonName(p);
// 字面量的赋值会进行强校验每个属性
// 使用变量传参,不会进行每个属性的强校验
getPersonName({
  name: 'hilary',
  sex: 'male',
  weight: 123,
  say() {
    return 'call say'
  }
});
setPersonName(p, 'guoran')

// 当类应用接口时,要求类中必须含有接口定义的属性
class User implements Person {
  constructor(name: string, sex: string , weight: number) {
    this.name = name
    this.sex = sex
    this.weight = weight
  }
  name: string;
  sex: string;
  weight: number;
  say() {
    return 'say method'
  }
}

// 接口继承
interface Girl extends Person {
  cup: string
}

// 函数接口类型
interface Func {
  (name: string): string
}

const say: Func = (name: string) => { return name }