 //Declaring or Defining a function
console.log("day 01")

printThis();

function printThis(){
    console.log("Print...");
}

//While declaring the functions, the values that we give inside the parantheses are called as the parameters.
//When we are calling the functions, the real values of those parameters are given and they are called as Argument


//Default Parameters

function calc(a, b = 0){
    sum = a + b;
    return 2*sum;
}

let res = calc(5);
console.log(res);

//Rest Parameters

