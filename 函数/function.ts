// 注意形参是string 类型，返回的数据是number类型，
function test(n: string): number{
    return 100;
}
alert(test("dddd")) // 如果test() 没有传参就会提示报错，传入形参数据类型是string, alert() 打印的数据时return 返回的值100