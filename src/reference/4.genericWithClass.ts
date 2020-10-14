class Admin {
  constructor(private role: string[] | number[] ) {}
  getRole(index: number): string | number {
    return this.role[index];
  }
}

// 用泛型代替过多的类型申明
class Admin2<T> {
  constructor(private role: T[]) {}
  getRole(index: number): T {
    return this.role[index];
  }
}

const hilary = new Admin2<string>(['king', 'richer']);
console.log(hilary.getRole(1));

// 泛型继承
interface Person9 {
  name: string;
}

class Admin3<T extends Person9> {
  constructor(private role: Array<T>) {}
  getRole(index: number): string {
    return this.role[index]['name'];
  }
}

const admin3 = new Admin3<{ name: string, age: number }>([{ name: 'hilary', age: 29}, { name: 'guoran', age: 18}]);
console.log(admin3.getRole(1));

// 泛型的具体的约束
class Admin4<T extends number | string> {
  constructor(private role: T[]) {}
  getRole(index: number): T {
    return this.role[index];
  }
}

// 约束泛型只能为string 或 number
// new Admin4<boolean>([true]); error
const admin4 = new Admin4<number>([12]);