//Задание 7

let myArrayNew = [1, 2, 'a', 3, null, 0, 4, 'b', undefined, 5];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
for (let i = 0; i < myArrayNew.length; i++) {
    if (typeof myArrayNew[i] === 'number' && !isNaN(myArrayNew[i])) {
        if (myArrayNew[i] === 0) {
            zeroCount++;
        } else if (myArrayNew[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
}

console.log("Количество чётных элементов:", evenCount);
console.log("Количество нечётных элементов:", oddCount);
console.log("Количество нулевых элементов:", zeroCount);