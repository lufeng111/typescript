// let 声明的是常量
// const 声明的是常量，一次声明之后不能进行二次赋值

function demo(){
    var a = 0;
    let b = 0;
    var a = 1;
    if(true){
        var c = 1;
        let d = 3;
    }
    console.log(c);
    // ts会提示找不到定义的d , 是因为let 定义的变量，只能在语法块内部使用，只能在if(true){ 只能在这个内部使用}
    // console.log(d);

    const e = 10;
    // e = 20;  const 声明的常量不能进行二次赋值
}