/**Task 1
 * Реализовать ф-цию sum которая принимает любое кол-во аргументов и возвращает сумму всех аргументов
 * sum(1,2,3)  // 6
 * sum(1)  // 1*/

function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1,2,3));
console.log(sum(1));
