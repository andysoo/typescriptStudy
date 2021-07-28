console.log("hello ts")

let a: number = 100
// a="100" 类型错误，但依然可以编译
//如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
//联合类型
let b: "male" | "female"
b = "male"
b = "female"

let c: number | string
c = 100
c = "100"
