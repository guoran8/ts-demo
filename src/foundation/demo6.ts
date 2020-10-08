// 数组、元组
const numArr1 = [1, 2, 3]  // 类型推断
const numArr2: number[] = [1, 2, 3] // 类型注解
const numArr3: (number | string )[] = [1, 'two', 3]
const arr4: undefined[] = [undefined];

// 对象类型数组
const Person: { name: string} = { name: 'guoran'}
const arr5: { name: string }[] = [Person]

// 类型别名
type User6 = { name: string, age: number}
const arr6: User6[] = [{ name: 'guoran', age: 8}]

class Teacher {
  name: string;
  major: string;

  constructor(name: string, major: string) {
    this.name = name
    this.major = major
  }
}

const arr7: Teacher[] = [
  new Teacher('hilary', 'life'),
  {
    name: 'guo',
    major: 'happy'
  }
]

// 元组
const teacherInfo: [string, string, number] = ['hilary', 'male', 29]
const teacherInfoList: [string, string, number][] = [
  ['hilary', 'male', 29],
  ['hilary', 'male', 29],
  ['hilary', 'male', 29],
]