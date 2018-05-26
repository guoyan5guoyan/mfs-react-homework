/* 请将下面函数柯里化(currying)，需要写出箭头函数和非箭头函数两种答案
    function cala(add, mul, origin) {
        return (origin + add) * mul
    }
 */

 // 箭头函数
 let cala = add => mul => origin => (origin + add) * mul

 // function函数
 let cala = function (add) {
     return function (mul) {
         return function (origin) {
             return (origin + add) * mul
         }
     }
 }