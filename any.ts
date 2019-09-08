
// // any 定义一个不确定类型的值
// let notsure: any = false;
// notsure = "hello any";
// notsure = 56;
// alert(notsure);

// let arr3: any[] = ["asjdskj", 3, "jaskxnasx"];
// alert(arr3[1]) // 打印的是3

function test(){
    return ""
}
//  注意第二个string，是return数据的返回值的类型
function test2(n: string): string{
    return "10"
}
function test3(n: string): string{
    // 返回形参 n , 因为n 是string类型的，所以不报错
    return n
}

// 一般方法都必需有一个值返回，如果没有值返回, 也需要定义数据类型 void(空的数据类型)
function test4(n: string): void{
    alert(1); 
}
// test(123) 会报错，因为可形参的数据类型不匹配
test4("hahahh");