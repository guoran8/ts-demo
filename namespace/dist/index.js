"use strict";
// 没有加namespace时, html中使用World的话,下面的类都会成为全局变量
// 使用namespace之后,只暴露export的类,有点类似于模块化
// 配置项: "outFile": "./" 可以把输出文件合并为一个文件
var TheWorld;
(function (TheWorld) {
    // 子命名空间并导出
    // export namespace WestWorld {
    //   export class Brazil {}
    // }
    var China = /** @class */ (function () {
        function China() {
            var ele = document.createElement('div');
            ele.innerText = 'China';
            document.body.appendChild(ele);
        }
        return China;
    }());
    var America = /** @class */ (function () {
        function America() {
            var ele = document.createElement('div');
            ele.innerText = 'America';
            document.body.appendChild(ele);
        }
        return America;
    }());
    var Japan = /** @class */ (function () {
        function Japan() {
            var ele = document.createElement('div');
            ele.innerText = 'ele';
            document.body.appendChild(ele);
        }
        return Japan;
    }());
    var Lebanon = /** @class */ (function () {
        function Lebanon() {
            var ele = document.createElement('div');
            ele.innerText = 'Lebanon';
            document.body.appendChild(ele);
        }
        return Lebanon;
    }());
    // 暴露给外部
    // export class World {
    //   constructor() {
    //     new America();
    //     new China();
    //     new Japan();
    //     new Lebanon();
    //   }
    // }
})(TheWorld || (TheWorld = {}));
/**------------------------------------*/
// 模块化的使用
// components.ts
// namespace Components {
//   export interface Name {
//     name: string;
//   }
//
//   export class China {
//     constructor() {
//       const ele = document.createElement('div');
//       ele.innerText = 'China';
//       document.body.appendChild(ele);
//     }
//   }
//
//   export class America {
//     constructor() {
//       const ele = document.createElement('div');
//       ele.innerText = 'America';
//       document.body.appendChild(ele);
//     }
//   }
//
//   export class Japan {
//     constructor() {
//       const ele = document.createElement('div');
//       ele.innerText = 'ele';
//       document.body.appendChild(ele);
//     }
//   }
//
//   export class Lebanon {
//     constructor() {
//       const ele = document.createElement('div');
//       ele.innerText = 'Lebanon';
//       document.body.appendChild(ele);
//     }
//   }
// }
//
// // 使用 components.ts 暴露出来的方法
// // use.ts
// /// <reference path='./components.ts' />
// namespace Use {
//   export class Name {
//     name: Components.Name =  {
//       name: 'guo'
//     }
//   }
//   new Components.China();
//   new Components.America();
//   new Components.Lebanon();
//   new Components.Japan();
// }
