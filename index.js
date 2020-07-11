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