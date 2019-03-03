/**Task 2
 * Реализовать memoization - функция, которая принимает функции с любым количеством аргументов,
 * и если она уже вызывалась ранее с этими же аргументами - отдавать сразу ответ, если же нет,
 * вызывать переданную функцию
 * function multiply(x, y){
 * return x * y;
 * }
 *
 * memoization(multiply)(1 ,2); // вычислено
 * memoization(multiply)(1 ,3); // вычислено
 * memoization(multiply)(1 ,2); // взято из кеша
 * memoization(sum)(1 ,3, 4)  // вычислено
 * memoization(sum)(10)  // вычислено
 * memoization(sum)(10)  // взято из кеша
 * */

function multiply(x, y){
    return x * y;
}

var myMap = new Map();
function memoization(operation) {
    return (...args) => {
        let key = args.join('_') + '_' + [operation.name];
        if (myMap.get(key)) {
            console.log('взято из кеша');
            return myMap.get(key);
        }
        result =  operation(...args);
        myMap.set(key, result);
        console.log('вычислено');
        return result;
    }
}

console.log(memoization(multiply)(1 ,2)); // вычислено
console.log(memoization(multiply)(1 ,3)); // вычислено
console.log(memoization(multiply)(1 ,2)); // взято из кеша
console.log(memoization(sum)(1 ,3, 4));  // вычислено
console.log(memoization(sum)(10)); // вычислено
console.log(memoization(sum)(10)); // взято из кеша
