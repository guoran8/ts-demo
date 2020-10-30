// 泛型类型注解
const func: <T>() => string = <T>() => {
  return '123'
}

// 拆分上面
function func9<T>(param: T): T {
  return param;
}
const func3: <T>(param: T) => T = func9;