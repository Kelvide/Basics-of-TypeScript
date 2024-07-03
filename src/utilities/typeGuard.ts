import '../style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TYPE GUARD</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`


// TYPE GUARD
// A type guard is a technique used in TypeScript to ensure that a value conforms to a specific type within a conditional block.
// Type guards allow the TypeScript compiler to narrow down the type of a variable at runtime, enabling safer access to properties and methods specific to that type.

// Using "typeof" guard
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

// Function to check the data type of a value
function checkValueType(value: ValueType): void {
    if (typeof value === 'string') {
        console.log(value.toLowerCase());
        return;
    }
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
        return;
    }
    console.log(`boolean: ${value}`);
}

checkValueType(value)


// Using EQUALITY NARROWING
// Equality narrowing is a type guard technique in TypeScript where the type of a variable is narrowed down based on a comparison using equality (==, ===) or inequality (!=, !==) operators.
// This allows the TypeScript compiler to infer a more specific type within the true branch of a conditional statement.

function example(value: string | number) {
    if (typeof value === 'string') {
        // Here, TypeScript knows 'value' is of type 'string' due to the type guard
        console.log('The value is a string:', value);
    } else {
        // Here, TypeScript knows 'value' is of type 'number'
        console.log('The value is a number:', value);
    }
}

example('hello'); // Output: The value is a string: hello
example(42);      // Output: The value is a number: 42


// Using TRUTHY / FALSY GUARD
// A truthy/falsy guard is a type guard technique in TypeScript where the type of a variable is narrowed down based on its truthiness or falsiness. In JavaScript, values like 0, null, undefined, NaN, '', and false are considered falsy, while all other values are considered truthy.
// This allows the TypeScript compiler to infer a more specific type within the true or false branch of a conditional statement.

function printLength(value: string | null | undefined) {
    if (value) {
        // Here, TypeScript knows 'value' is of type 'string' because null and undefined are falsy
        console.log('The length of the string is:', value.length);
    } else {
        // Here, TypeScript knows 'value' is either null or undefined
        console.log('No string provided');
    }
}

printLength('hello'); // Output: The length of the string is: 5
printLength(null);    // Output: No string provided
printLength(undefined); // Output: No string provided



// INSTANCEOF TYPE GUARD
// Check a specific function class or constructor function of an object at runtime
// The 'instanceof' type guard is a technique in TypeScript used to narrow down the type of a variable based on its constructor function. This is useful for distinguishing between instances of different classes.
// The 'instanceof' operator checks if an object is an instance of a particular class or constructor function.

// EXAMPLE 1
class Dog {
    bark() {
        console.log('Woof!');
    }
}

class Cat {
    meow() {
        console.log('Meow!');
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        // Here, TypeScript knows 'animal' is of type 'Dog'
        animal.bark();
    } else if (animal instanceof Cat) {
        // Here, TypeScript knows 'animal' is of type 'Cat'
        animal.meow();
    }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog); // Output: Woof!
makeSound(cat); // Output: Meow!

// EXAMPLE 2
try {
    // Some code that may throw an error
    throw new Error('This is an error');
} catch (error) {
    if (error instanceof Error) {
        console.log('Caught an Error object: ' + error.message);
    } else {
        console.log('Caught an unknown error');
    }
}

// EXAMPLE 3
function checkInput(input: Date | string): string {
    if (input instanceof Date) {
        return input.getFullYear().toString();
    }
    return input;
}

const year = checkInput(new Date());
const randomData = checkInput('2020-05-05');
console.log(year);
console.log(randomData);