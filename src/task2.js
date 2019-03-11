/**2. Итератор
 Функция integers создает бесконечный итератор, который продолжает производить целые числа вечно.

 Нужно создать функцию take, которая оборачивает данный итератор в другой итератор,
 останавливающийся по достижении n элементов.

 const iter = integers();

 for (let i of take(3, iter)) {
    console.log(i)
};
 // 0, 1, 2, 3
 */
function take(stop, iter) {
    let iterator = {};
    iterator[Symbol.iterator] = function () {
        return {
            next: function () {
                let value = iter.next().value;
                return value <= stop ?
                    {value: value, done: false} :
                    {done: true};
            }
        }
    }
    return iterator;
}

function integers() {
    let current = 0;
    return {
        next: function () {
            return {value: current++, done: false};
        }
    }
}

const iter = integers();

for (let i of take(3, iter)) {
    console.log(i)
};


