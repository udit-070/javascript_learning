//hoisitng means memory creation. I fwe create memory for variable, it is called variable hoisting and when we create memory for functions it is called function hoisting.
// This is called Variable Hoisting

console.log('name is', name);

var name;
name = 'tom';
console.log('name is ', name);

// We can completely understand this when we go for the execution context.
// The output is not an error. It is geniuinely showing in 1st console.log it is going for name is undefined and in the next console.log it is howing that name is tom.
// This is because in creation phase of global execution context the variable name is getting declared and value that is assigned to it is undefined. So, in execution phase of the global execution context when the 1st console.log is hit, the value of the vsriasble ios undefined and it is getting printed.
// the scene is different when the varisable is getting declsred using let and const. The details are in my notes.

console.log('name is', name);

let name;
name = 'tom';
console.log('name is ', name);



console.log('name is', name);

const name = 'tom';
console.log('name is ', name);

// When a variable is getting declared using const, then it has to be initialised immediately.So, it cannot be left uninitialised. 

// Temporal Dead Zone
// It is an area where we cannot access a variable until it is initialised
// TDZ is defined for a specific variable. if we try to acccess a variable in TDZ, it will show reference error

