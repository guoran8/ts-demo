// 基础类型 number string boolean void undefined symbol null
// 对象类型 {} Class function []

// 定义、赋值分开写,无法自动类型推断
let num;
num = 123;

// 函数定义
const fun1 = (str: string): number => {
  return parseInt(str, 10);
}

// 冒号后面是类型, 等号后面是函数体
const func2: (str: string) => number = (str) => parseInt(str, 10);

// other case
interface Person {
  name: string
}
const rawData = '{ "name":"guoran" }'
// 类型推到为any
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123
temp = '123'