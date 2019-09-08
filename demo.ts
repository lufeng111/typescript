// // 声明的变量istrue 是布尔类型的 ，值是false
// let istrue: boolean = false;
// alert(istrue);

// // 声明的变量str 是string类型的， 
// let str: string = "hello typescript";
// alert(str);

// // 声明的变量是number 类型的
// let num1: number = 10.0;
// num1 += 20; //  let 声明的变量可以重复赋值，num1 +=20 意思是num加上20的值
// alert(num1) // num1 值是30

// // 声明变量是数组类型的,有两种方式
// // number类型的数组，数组中的值只能是数字
// let arr1: number[] = [1,2,3];
// // string 类型的数组
// let arr2: Array<string> = ["ashjd", "ahdkshks"];
// alert(arr1[0]) // 取得是arr[0] = 1

// // let tup: [number, string] = [12, "lufeng"];
// // alert(tup[0])

// 枚举 enum
// enum color { red, green, yellow }
enum color { red = 2, green = 8, yellow = 18}
let c:color = color.red;
alert(c) // 打印的是0， red的值是0， green值是1，yello值是2依次累加
alert(color.green); 
// 但是可以给enum类型赋值，只能赋值number,不能赋值string类型

