/* 对于单参数函数，如果通过解构语法设置默认值，修改代码实现默认值b = 10
    function test({a,b}){
        console.log(a,b)
    }
*/

function test({a, b=10}){
    console.log(a, b)
}

test({a:1})