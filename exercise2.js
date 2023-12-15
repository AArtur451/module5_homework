// Задание 2 

let y;

//y = 5;
//y = "x";
//y = true;

if(typeof y === 'string'){
    console.log("у - строка")
} else if (typeof y === 'number'){
    console.log("у - число")
} else if (typeof y === 'boolean'){
    console.log("у - логический тип")
} else {
    console.log("Логический тип неопределен")
}