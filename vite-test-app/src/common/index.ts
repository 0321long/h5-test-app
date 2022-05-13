/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author:
 * @Date: 2022-05-11 15:29:42
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 10:26:43
 */
// 深拷贝
export const deepClone = (obj: any, has = new WeakMap()) => {
  // 类型检查
  if (obj == null) return obj;
  if (obj instanceof Date) return obj;
  if (obj instanceof RegExp) return obj;
  if (!(typeof obj == 'object')) return obj;

  // 构造对象
  const newObj = new obj.constructor();

  // 防止自引用导致的死循环
  if (has.get(obj)) return has.get(obj);
  has.set(obj, newObj);

  // 循环遍历属性及方法
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }

  // 返回对象
  return newObj;
};

// 原生ajax请求
function sendAJAX(url: string) {
  return new Promise((resolve, reject) => {
    // 1: 创建XMLHttpRequest对象
    const http = new XMLHttpRequest();
    // 2: 初始化
    http.open('GET', url);
    // 3: 发送请求
    http.send();
    // 4: 事件绑定
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status >= 200 && http.status < 300) {
          resolve(http.response);
        } else {
          reject(http.status);
        }
      }
    };
  });
}

// 对象拓展(合并)
let obj = {
  a: 1,
  b: 2,
};
let obj2 = {
  c: 3,
  d: 4,
};
let obj3 = (<any>Object).assign(obj, obj2);
let obj4 = { ...obj, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj4); // { a: 1, b: 2, c: 3, d: 4 }


// 数组合并
let arr = [1, 2, 3]
let arr2 = [2, 3, 5]
let arr3 = [...arr, ...arr2]
let arr4 = arr.concat(...arr2)
console.log(arr3); // [ 1, 2, 3, 2, 3, 5 ]
console.log(arr4); // [ 1, 2, 3, 2, 3, 5 ]


const m = new Map()
m.set("name", "张三")
m.set("age", 20)

// Object.fromEntries => ESMAscript 10 新特性： 将键值对数组转换回对象
const res = Object.fromEntries(m)
console.log(res); // {name: "张三", age: 20}
// 将对象转换为可遍历的键值对数组
const entriesArr = Object.entries(res)
console.log(entriesArr); // [['name', '张三'], ['age', 20]]

// 大数字计算
let max = Number.MAX_SAFE_INTEGER
console.log(max + 2);
console.log(BigInt(max) + BigInt(2));

var str = "aaaaaabbbbbbbcccccccdddddd";
var reg = /(\w)\1*(\w)\2*(\w)\3*(\w)\4*/g;
console.log(str.replace(reg,"$1$2$3$4"));


// 正则匹配字符串中的数字
let str2 = 'abc1n2n3452nrs23'
let numReg = /\d+/g
let numArr = str2.match(numReg)
let newArr = numArr?.map((item) => {
  return +item
})
console.log(newArr);