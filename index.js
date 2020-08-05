// change year to century 

function century(year) {
    // Finish this :)
    return year%100 === 0 ? year/100 : Math.floor(year/100+1)
  }

// number to string

const number = 123
const a = number.toString();

// even or odd

function even_or_odd(number) {
    if(number%2 === 0) return 'Even';
    return 'Odd'
  }

// opposites attract 

function lovefunc(flower1, flower2){
    if(flower1%2 === 0 && flower2%2 !== 0){
    return true;
    }if(flower1%2 !== 0 && flower2%2 === 0){
    return true;
    } else {
    return false;
    }
  }

// rock paper scissors 

const rps = (p1, p2) => {

    if(p1===p2) {
    return 'Draw!';}
    else if (p1 === 'rock' && p2 === 'scissors') {
    return 'Player 1 won!';}
    else if (p1 === 'scissors' && p2 === 'paper'){
    return 'Player 1 won!';}
    else if (p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!';}
    else{
    return 'Player 2 won!';}
    };

// count the monkeys~

function monkeyCount(n) {
    let monkeys = [];
    for(let i=1; i<n+1; i++){
    monkeys.push(i);
  }  
    return monkeys;
  }

// sum of positive 

function positiveSum(arr) {
    var total = 0
      for(i=0; i<arr.length; i++)
      if(arr[i]>0){
     total+=arr[i];
     }
     return total;
    
  }

  // who likes this

  function likes(names){
    if(names.length === 0){
      return "no one likes this";
    } else if (names.length === 1){
      return `${names[0]} likes this`
    } else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length >= 4){
      return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
    }
}

likes(['Alex', 'Jacob', 'Mark', 'Max']);

// descending order

function descendingOrder(n){
  return parseFloat(n.toString().split('').sort().reverse().join('')) * Math.sign(n)
 }

 // string repeat

 function repeatStr (n, s) {
  return s.repeat(n);
 }

 // find average

 function find_average(array) {
  let sum = array.reduce((curr, accum)=>{
    return curr+=accum;
  }); 
  return sum/array.length;
}

// disemvowel 

function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g,"");
}

// sum of numbers

function getSum( a,b ){
  if (a == b) return a; //(1)
  if (a < b) {
     return a + getSum(a+1, b); //(2)
  }else {
     return a + getSum(a-1,b); //(3)
  }
}

//square each number

const squareDigits = num => {
  const digits = num.toString().split('')
  const squaredDigits = digits.map(n => n * n)
  const squaredNumber = squaredDigits.join('')
  return parseInt(squaredNumber);
}

// open or senior

return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');

// ones and zeros

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};

// reverse words

function reverseWords(str) {
  // Go for it
  return str.split("").reverse().join("").split(" ").reverse().join(" ")
}