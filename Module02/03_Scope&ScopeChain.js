// Imagine you are in a house that has many rooms. Now there are some facilities that aree available in every room. Butnthere are many other that are available in particular rooms and not available in other rooms.
// The same thing happens with the variables in javascript. They behave on the basis of where they are declared.
// This is called Scope.
// There are 4 types of scopes.
// 1. Global Scope
// 2. function scope
// 3. Block scope
// 4. Module scope



// Global scope means the vaiable can be accessed everywhre in the file

var name = 'suman';
console.log(name);

// If we do wndow.name here, we will get an empty string because the variable is declared with let.
// But when the variable is dclared with var then when we do window.name we will get suman string as an output.
// When we declare a variable using var in global scope, it becomes a property of the window object.

// FUNCTION SCOPE
// Variables declared within a function is only accessible within the same functiona nd not outside the function



// Scope difference while using var, let and const
// var is function scoped while let and const are block scoped

// Scope Chain

let globalVar = "I am a global variable";

function outer(){
    let outerVar = "I am an outer variable";

    function inner(){
        let innerVar = "I am an inner variable";

        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);        
    }

    inner();
}

outer();

// Scope chain the scope of a variable moves outwards


// Variable Shadowing
