//Задание 8

let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
]);
for(let name of fruits.keys()){
    console.log(`Ключ - ${name}`);
}

for(let color of fruits.values()){
    console.log(`Значение - ${color}`);
}