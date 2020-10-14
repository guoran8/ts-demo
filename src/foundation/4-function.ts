// 函数
function hello1() {}
const hello2 = function () {};
const hello3 = () => {};

function add(x: number, y: number): number {
  return x + y; // 类型推断返回值
}

// 没有返回值
function sayHello(): void {
  console.log('hello');
}

// 不执行到最后
function errorEmitter(): never {
  throw new Error();
  // console.log('end');
}

// 函数参数解构
function add2({ first, second }: { first: number, second: number}): number {
  return first + second;
}

const total = add2({ first: 123, second: 456});

