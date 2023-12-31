import './style.css'

let numberOfCupsOfCoffee = 0

let fullName = 'Kristy Prieto'

const aboutMe = {
    fullName: fullName,
    luckyNumber: 14,
    favoriteMovies: ['Om Shanti Om', 'Occulus']
}

console.log(`Hello! My name is ${fullName} and I enjoy drinking ${numberOfCupsOfCoffee} cups of coffee per day. My favorite number is ${aboutMe.luckyNumber} :)`)

const userName = window.prompt("What is your name? ")

if(userName === null || userName === '')
{
    console.log('I can see you might be a bit shy! That is okay, it is very nice to meet you!')
}
else{
    console.log(`Hello ${userName}! It is nice to meet you!`)
}

const firstOperand = Number(window.prompt("Let's do some math! Please pick a random number."))
console.log(`You chose ${firstOperand}.`)
const secondOperand = Number(window.prompt("Thank you! please pick another number"))
console.log(`You chose ${secondOperand}.`)

let sum = firstOperand + secondOperand
let difference = firstOperand - secondOperand
let product = firstOperand * secondOperand
let quotient = firstOperand / secondOperand

console.log(`Here are some math fun facts! If you add ${firstOperand} with ${secondOperand}, you will get ${sum}, isn't that neat?`)
console.log(`But if you subtract ${firstOperand} from ${secondOperand}, you will get ${difference}`)
console.log(`But thats not all! If you multiply ${firstOperand} with ${secondOperand}, you will get ${product}!`)
console.log(`And last but not least, if you divide ${firstOperand} from ${secondOperand}, you will get ${quotient}.`)

//Array of random numbers
const numbers = [28153, 48673, 32390, 27935, 28305, 16962, 18316, 38829, 13784, 42546, 23106, 29533, 27903, 25044, 43238, 4098, 27262, 42426, 17556, 24883]

const arrayMath = {
    smallest: numbers[0],
    largest: numbers[0],
    sum: 0,
    average: 0,
    sumOfOdd: 0,
    evenNumbersArray: [0]
}

//Finds the smallest number in the array
for( let count = 1; count < numbers.length; count++ ) {
    if( arrayMath.smallest > numbers[count] )
    {
        arrayMath.smallest = numbers[count]
    }
}

//Finds the largest number in the array
for( let count = 0; count < numbers.length; count++ ) {
    if( arrayMath.largest < numbers[count] )
    {
        arrayMath.largest = numbers[count]
    }
}

//Adds all the numbers in the array
for( let count = 0; count < numbers.length; count++ ) {
    arrayMath.sum += numbers[count]
}

//Adds all the numbers and finds the average
arrayMath.average = arrayMath.sum / numbers.length

//Sum of all odd numbers
for( let count = 0; count < numbers.length; count++ ) {
    if( numbers[count] % 2 === 1 ) {
        arrayMath.sumOfOdd += numbers[count]
    }
}

//Adds all the even numbers into another array

for( let count = 0; count < numbers.length; count++ ) {
    if( numbers[count] % 2 === 0 ) {
        arrayMath.evenNumbersArray.push(numbers[count])
    }
}
arrayMath.evenNumbersArray.shift()

console.log(`Heres some neat information, the smallest number in the array is ${arrayMath.smallest}`)
console.log(`The largest number in the array is ${arrayMath.largest}`)
console.log(`The sum of the array is ${arrayMath.sum}`)
console.log(`and lastly, the average of the array is ${arrayMath.average}`)
console.log(`Just kidding, another fact is sum of all odd numbers in the array is ${arrayMath.sumOfOdd}`)
console.log(`Now last but not least, the total number of even numbers in the array are ${arrayMath.evenNumbersArray.length} numbers.`)
