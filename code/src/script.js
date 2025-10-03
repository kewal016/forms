

function createBankAccount(owner, balance) {
    return {
        current(amount) {
            return `your current balance is $${balance}`;
        },
        deposit(amount) {
            balance += amount;
            console.log(`${owner} deposited ${amount}. Balance: $${balance}`);
        },
        withdraw(amount) {
            if(amount > balance) {
                console.log("Insufficient funds!");
                return;
            }
            balance -= amount;
            console.log(`${owner} withdrew ${amount}. Balance: $${balance}`);
        },
        getBalance() {
            return balance;
        }
    };
}


const account = createBankAccount('Kewal', 100000);
// account.current();
console.log(account.current());
account.deposit(50000);
account.withdraw(25000);
console.log(account.getBalance());


function disFactory(percent) {
    return function(price) {
        return price - (price * percent) / 100;
    };
}

const studentDiscount = disFactory(10);
const holidayDiscount = disFactory(25);

console.log(studentDiscount(159));
console.log(holidayDiscount(159));


function rateLimiter(limit) {
    let calls = 0;
    return function() {
        if( calls < limit) {
            calls++;
            console.log(`Action allowed (${calls}/${limit})`);
        }
        else {
            console.log('Rate limit exceeded');
        }
    };
}

const limitAction = rateLimiter(5);

limitAction();
limitAction();
limitAction();
limitAction();
limitAction();
limitAction();
limitAction();



//Personalized Logger

function loggerFactory(tag){
    return function(message){
        console.log(`[${tag}] ${message}`);
    };
}

const errorLogger = loggerFactory('ERROR');
const infoLogger = loggerFactory('INFO');

errorLogger('File not found');

infoLogger('Server Started')


function eventFactory(message) {
    return function() {
        alert(`Button Clicked: ${message}`);
    };
}


document.getElementById('btn1').addEventListener('click', eventFactory('Hello!!!'));
document.getElementById('btn2').addEventListener('click', eventFactory('Bye Bye!!!'));

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return `I have a ${this.carname}`;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.mmodel = mod;
    }

    show() {
        return `${this.present()}, it is a ${this.model}`
    }
}



class Car1 {
    constructor(brand) {
        this.carname = brand;
    }

    get cname() {
        return this.carname;
    }

    set cname(x) {
        this.carname = x;
    }
}

const myCar = new Car1('Porsche');

console.log(myCar.carname)