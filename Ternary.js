// using ternary operator //

const num1 = 15;
const num2 = 10;

let result = {};

num1 > num2 ? result = 2 * num1 : result = num1 + num2;

console.log(result);


// using simple if else //

const num3 = 15;
const num4 = 20;

let result2 = {};

if(num3 > num4){
    console.log('result :' +  num3 * 2)
}

else{
    console.log('result :' + ' ' + (num3+num4))
}