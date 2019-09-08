// name 数据类型是string, age 数据类型是number , 返回的结果是string类型
function test(name: string, age: number): string{
    return name + ":" + age
}
// 如果传参的数据类型不是string ,ts会提示编译报错
test("lifeng", 18);