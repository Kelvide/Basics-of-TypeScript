let name: string = "Elon MUSK";
// Advantage of ts is when you set a specific type to a variable you get suggestions of only methods available for the type example below 
name = name.toUpperCase();
console.log("Name:", name);

// You can also have your variables without been type allocated but ts is smart to detect the type which the variable belong to once it has a value just like this below
let age = 53;
age = age - 1;
console.log("Age:", age);

let is_alive = true;
is_alive ? console.log(name, "is alive.") : console.log(name, "is dead")

// Multi type definition for one variable (Union Types)
let salary: number | string = 300
salary = '$500'
console.log(salary)

// Literal type definition
let apiStatus: 'pending' | 'success' | 'error' = "success"
apiStatus = "pending"

// This will return an error because it is not part of the literals in the variable interface
// apiStatus= "processing"
console.log(apiStatus)

// TYPE ANY
let anyData: any = 65
anyData = "Welcome back!"
anyData = true
console.log(anyData)

// The random variable is not declared so it is set to default as any.
let random;
console.log(typeof random);

// Union type with undefined
let books = ['The Art of War', 'Law of Business Success', 'Think Big']
let foundBook: string | undefined;

for (let book of books) {
    if (book === "The Art of War") {
        foundBook = book.toLocaleUpperCase();
        break
    }
}

console.log(foundBook);

// Array type definition
// After declaration ts is not accepting any type of data in the array apart from the type allocated to it.
let productPrices: number[] = [100, 50, 30, 400]
// For a type number the below code won't work will return an error:
// productPrices.push('Hello world ')
console.log(productPrices);

let productname: string[] = ['dell', 'hp', 'lenovo', 'apple']
console.log(productname);

// This is an empty array type definition different from type any
let randArr: [] = []
console.log(randArr);

// Union type in array
let userData = ['kelvin', 61]
console.log(userData);
// or
let userInfo: (string | number | boolean)[] = ['kelvin', 61, true]
console.log(userInfo);



// OBJECT Type Definition

// Basic object type definition
let car: { brand: string, year: number } = { brand: "Rolls Royce", year: 2024 };
car.brand = "BMW"

let car1cost = { brand: 'Rolls Royce', cost: 660000 }
let car2cost = { brand: 'BMW', cost: 65895 }
let car3cost = { brand: 'Benz' }

// Store the car cost variable in the cars 
// The code below has an error because the type defined for the array "cost" is not present in the object "car3cost". To fix this, check the next line we used the type optional property.
// let allCars: { brand: string, cost: number }[] = [car1cost, car2cost, car3cost]
let allCars: { brand: string, cost?: number }[] = [car1cost, car2cost, car3cost]
console.log("All cars array", allCars);

// The readonly modifier in the inline code comment for the readOnlyCars array means that the brand property of each object in the array cannot be changed once it is set.
let readOnlyCars: { readonly brand: string, cost?: number }[] = [car1cost, car2cost, car3cost]
console.log("Read only", readOnlyCars);

// Insersion Type
// Combine multiple types into one.
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type Worker = Person & Employee;

let worker: Worker = { name: "John", employeeId: 1234 };

console.log("Insersion Type", worker);



// FUNCTION TYPE DEFINITION
function sayHi(name: string) {
    console.log("String func", `Hey there ${name.toLocaleUpperCase()}`);
}
sayHi("Kelvin")

// The function return type 
function convertNGNToUSD(amount: number): number {
    return amount * 1550
}
convertNGNToUSD(300)

// Function to if a name is in the array or not
// Function to if a name is cute or not :)
let cuteNames: string[] = ["Kelvin", "Kyle"]

function isNameInList(name: string): boolean {
    return cuteNames.includes(name)
}

let nameToCheck = "Olivia"

if (isNameInList(nameToCheck)) {
    console.log(`${nameToCheck} is a cute name`);
} else {
    console.log(`${nameToCheck} is not a cute name`);
}

// Function to receive a message and the sum of some numbers
function sumNums(message: string, ...numbers: number[]): string {
    let doubleNums = numbers.map((num) => num * 2)
    console.log("Doubled the number in the array", doubleNums)

    let total = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0)
    return `${message}${total}`
}

let result = sumNums("The total is : ", 2, 4, 6, 68, 4, 5)
console.log(result);
