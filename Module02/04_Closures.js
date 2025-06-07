// Closure is a function that can remember a variable of its outer function even after the outer function has been executed
// Closure allows a function to access a variable from its outer scope even after outer scope finnishes its execution

// Real life Example of Closures

function uditCreateAccount(initialBalance){
    let balance = initialBalance;

    return {
        deposit: (amount) => {
            balance = balance + amount;
            console.log(`Deposited ${amount} Current Balance ${balance}`)
        },
        
        withdraw: (amount) => {
            if(amount >> balance){
                console.log("Insufficient funds");

            }
            else{
                balance = balance - amount;
                console.log(`Withdrawn ${amount} Current Balance ${balance}`)
            }
        },

        checkBalance: () => {
            console.log(`Your Current balance is ${balance}`)
        }

    }
}    

const myAccount = uditCreateAccount(1000);
console.log(myAccount);

console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(500));

console.log(myAccount.checkBalance());