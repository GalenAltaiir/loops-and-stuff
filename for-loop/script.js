console.log("I work")
let output = document.getElementById("output")
let output2 = document.getElementById("output2")

// ex 1 (print hello world 10 times)

/* for (let x = 1; x <= 10; x++){
    output.innerHTML += "Hello World " + x + "<br>";
} */

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// ex 2 uncomment to see output (print name of a person with input 5 times)

/* 
for(i=0; i<5;i++){

    let n = window.prompt("etner your name");
    document.write("Hi good Morning !! How are you \t "+  n + "<br><br>")
} */


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// EX 3 (loop through an array)

/* let drinks = ["coca cola", "pepsi", "fanta", "7up"]

for (i = 0; i < drinks.length; i++){
    output.innerHTML += drinks[i] + '<br>'
} */


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// EX 4 (find sq of numbers 1-10)

/* for(i=1; i <= 10; i++){
    output.innerHTML += "The square of " + i + " is: " + i*i + "<br><br>";
} */


// EX 5 (find factorial of a number)

/* let input = window.prompt("Find factorial of ");
let result;
output.innerHTML = "The factorial of "+input+"<br>"
arrFactorial = [];

for(input; input > 0; input --){
    arrFactorial.push(input);
}

result = arrFactorial.join(" * ")


output.innerHTML += "is equal to " + eval(result)



 */
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// EX 6 (generate fibonacci numbers)
/* let num1 = 0;
let num2 = 1;
let sumOfPrevNums;

for(i = 1; i < 50; i++){
    output.innerHTML+= num1 + "<br>"
    
    sumOfPrevNums = num1 + num2;
    num1 = num2
    num2 = sumOfPrevNums;
} */

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// EX 7 (Add a sum of 10 user-generated inputs)

/* let nums = [];
let sum;

for(i = 1; i <= 10; i++){
    let uInput = window.prompt("Enter a random number")

    output.innerHTML = "Numbers so far are: <br>"
    
    nums.push(uInput)
    
    output2.innerHTML += uInput+"<br>"

}

sum = nums.join("+");
output2.innerHTML += "Final Result is: " + eval(sum)
output2.innerHTML += nums */
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// EX 8 (Even Numbers from N to M)


/* let n = window.prompt("Enter Starting Value")

let m = window.prompt("Enter End Value")

let evens = [];
let oddies = [];

output.innerHTML = "Starting from " + n + " until " + m + "<br> These are the following even numbers:"

for(n; n <= m; n++){

    if(n % 2 === 0){
        evens.push(n)
    } else {
        oddies.push(n);        
    }

}

output2.innerHTML += "<br> Even numbers from the sequence: " + evens + "<br>";
output2.innerHTML += "<br> The following numbers were NOT even numbers " + oddies + "<br>";
 */

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// EX 9 (Prime Numbers from 0 to N)


/*  let n = window.prompt("How many prime numbers?")
 

let primes = [];
      
firstLoop:
      for (let j = 0; primes.length < n; j++) {
       for(let i = 2; i < j; i++){
        if(j % i === 0){
            continue firstLoop;
        }
      }
      if(j>1) primes.push(j);
      }
output2.innerHTML = primes; 
 */


// EX 10 JS conditional to find the largest number from 5 numbers. Display alert box to show the result
// Sample -5, -2, -6, 0, -1
// OUT: 0


/* let toSort = [];
for(i = 1; i <= 5; i++){
    n = window.prompt("Enter 5 numbers")
    toSort.push(n)
}
    output.innerHTML += "Pre sorted = "+toSort + "<br>";
    toSort.sort(function(a,b){return a - b})
    output.innerHTML += "Sorted = " +toSort;

    for(i = 0; i < toSort.length; i++){
        output2.innerHTML = "Largest Number is "+toSort[i];
    } */



