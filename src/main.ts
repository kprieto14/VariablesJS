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

if(userName == null || userName == '')
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

const numbers = [28153, 48673, 32390, 27935, 28305, 16962, 18316, 38829, 13784, 42546, 23106, 29533, 27903, 25044, 43238, 4098, 27262, 42426, 17556, 24883]

