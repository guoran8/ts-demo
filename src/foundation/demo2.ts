// 基础类型
// null undefined, symbol, boolean, void
const num: number = 123;
const str: string = 'string';

// 对象类型 Object []
const teacher: {
  name: string,
  age: number
} = {
  name: 'hilary',
  age: 29
}
const arr: number[] = [1,2,3,4]

class Person {}

const p: Person = new Person();
const fun: () => number = () => 123;

