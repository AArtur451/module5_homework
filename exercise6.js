//Задание 6
let myArray = [1,1,1,1,1];
let myArrayResult = true;
for(let i = 1; i < myArray.length; i++){
    if(myArray[i] !== myArray[0]){
        myArrayResult = false;
        break;
    }
}

console.log("Result", myArrayResult);