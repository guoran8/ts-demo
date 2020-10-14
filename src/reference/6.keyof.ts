interface Penguin {
  color: string;
  foot: number;
  gender: string;
}

// 前置知识点
type NAME = 'name';
// const n: NAME = '123'; error
const n: NAME = 'name';

class CuteAnimal {
  constructor(private kind: Penguin) {}
  getInfo(key: string)  {
    // this.kind[key]; 这样会报错, 因为key为任意字符串,不一定是Penguin里的属性

    // 类型保护
    if (key === 'color' || key === 'foot' || key === 'gender') {
      return this.kind[key];
    }
  }
  // keyof 有点像 key of 遍历属性
  // T extends 'name' === type T = 'name'
  getInfoWithKeyOf<T extends keyof Penguin>(key: T): Penguin[T] {
    return this.kind[key];
  }
}

const penguin = new CuteAnimal({
  color: 'black',
  foot: 4,
  gender: 'female'
});

const info = penguin.getInfo('color') as string; //类型保护后 可以强制断言为 string 类型
console.log(info);

const infoWithKeyOf = penguin.getInfoWithKeyOf('foot')