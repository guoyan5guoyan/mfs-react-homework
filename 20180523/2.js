/* 请使用解构语法实现获取斐波那契数列前10个数
*/
function* fn(){
    let i = 0
    let j = 1
    while (true) {
        [i, j] = [j, i+j]
        yield i
      
    }
}
  
let [a, b, c, d, e, f, g, h, j, k] = fn()
console.log(a, b, c, d, e, f, g, h, j, k)
