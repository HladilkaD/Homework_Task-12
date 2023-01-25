// 1

const randomEl = [1,2,3,6,'23','efwef','wfefw',true];

const numsFunc = (nums) => {
    const arrOfNums = [];
    let sum = 0;
    for(let i = 0; i < randomEl.length; i++) {
        if(typeof randomEl[i] === "number"){
            arrOfNums.push(randomEl[i]);
            sum+=randomEl[i];
        }
    }
    return sum / arrOfNums.length;
}
console.log("Середнє арифметичне = "+numsFunc(randomEl));


//2
/*
let a = parseInt(prompt("type x value:"));
let b = parseInt(prompt("type y value:"));
let sign = prompt("select sign:");

const doMath = (x,znak, y) => {
    switch (znak) {
        case "+":
         return `x + y = ${x+y}`               
            break;
        case "-":
           return `x - y = ${x-y}`
           break;
        case "*":
            return `x * y = ${x*y}`
            break;
        case "/":
            return `x / y = ${x/y}`
            break;
        case "%":
            return `x % y = ${x%y}`
            break;
        case "^":
            return `x ^ y = ${x**y}`
            break;
        default:
            break;
    };
}
alert(doMath(a, sign, b))
*/



// 3
/*
const array = [];
for(let i = 0; i < 3; i++){
  array[i] = [];
  for(let j = 0; j < 3; j++){
    array[i][j] = prompt("array ["+(i+1)+","+(j+1)+"] = ?");
  };
};
console.log(array);
*/





//4
/*
 let initialStr = prompt("Input text");

 const lettersToRemove = [prompt("First letter to remove"),prompt("Second letter to remove")]   
 console.log(lettersToRemove)
   
const removeLettersFromString =(initialString,removeLettersArr) => {
    for(let i = 0;i<removeLettersArr.length;i++){
        initialString = initialString.replaceAll(removeLettersArr[i],"");
        console.log(initialString)
        console.log(removeLettersArr[i])
    }
    alert(initialString);
    
} 
removeLettersFromString(initialStr,lettersToRemove);
*/

