//Задание 1

let userInput = prompt("Введите значение");
let newNumber = +userInput;
if( isNaN(newNumber)){
    console.log("Упс, кажется, вы ошиблись")
} else{
    if(newNumber %2 ===0){
        console.log("Число " + newNumber + " чётное.");
    } else{
        console.log("Число " + newNumber + " нечётное.");
    }
}