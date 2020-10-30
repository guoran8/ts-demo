// 泛型(Generic): 泛指的类型
function combine(first: string | number, second: string | number) {
  return `${first}-${second}`;
}

console.log(combine(1, '3'));

// 函数接收一个未知的类型(调用时再确定类型)
function combine2<T>(first: T, second: T) {
  return `${first}-${second}`;
}

console.log(combine2<string>('1', '2'));

// 数组场景
// ele: T[] === ele: Array<T>
function combine3<T>(ele: Array<T>) {
  return ele;
}

console.log(combine3<number>([1, 2, 3, 4]));

// 多个泛型
function combine4<T, P>(x: T, y: P) {
  return `${x}-${y}`;
}

// 返回
function combine5<T, P>(x: T, y: P): T {
  return x;
}

// combine4(1, 2) 这样调用会自动推断
console.log(combine4<string, number>('one', 2));