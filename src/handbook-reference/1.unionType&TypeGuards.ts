interface Cat {
  haveFoot: boolean;
  run: () => {};
}

interface Fish {
  haveFoot: boolean;
  swim: () => {};
}

// 联合类型 animal: Cat | Fish
// 断言-类型保护
function pet(animal: Cat | Fish) {
  if (animal.haveFoot) {
    // 联合类型只会提示共有属性和方法
    // 断言 animal 强制为 Cat(类型保护)
    (animal as Cat).run();
  } else {
    (animal as Fish).swim();
  }
}

// in方法-类型保护
function pet2(animal: Cat | Fish) {
  if ('run' in animal) {
    animal.run()
  } else {
    animal.swim()
  }
}

// typeof语法-类型保护
function add(x: string | number, y: string | number) {
  if (typeof x === 'string' || typeof y === 'string') {
    return `${x}-${y}`;
  }
  return x + y;
}

// instanceof-语法保护
// 不要使用interface, 因为不支持instanceof
class Counter {
  constructor(public num: number) {}
}

function connect(x: Counter | object, y: Counter | object): number {
  if (x instanceof Counter && y instanceof Counter) {
    return x.num + y.num;
  }
  return 0;
}