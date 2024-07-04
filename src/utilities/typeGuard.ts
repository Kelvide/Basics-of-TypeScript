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



// Type Predicate
// A type predicate is a technique in TypeScript that allows you to define a custom type guard function.
// Type predicates use the 'is' keyword to assert the type of a variable within a specific block.
// This is useful for creating reusable type-checking functions that can help TypeScript narrow down the type of a variable.

// EXAMPLE 1
type Fish = { swim: () => void }

type Bird = { fly: () => void; }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getPetAction(pet: Fish | Bird) {
    if (isFish(pet)) {
        // Here, TypeScript knows 'pet' is of type 'Fish'
        pet.swim();
    } else {
        // Here, TypeScript knows 'pet' is of type 'Bird'
        pet.fly();
    }
}

const fish: Fish = { swim: () => console.log('Swimming') };
const bird: Bird = { fly: () => console.log('Flying') };

getPetAction(fish); // Output: Swimming
getPetAction(bird); // Output: Flying

// EXAMPLE 2
type Student = {
    name: string;
    study: () => void;
};

type User = {
    name: string;
    login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
    return Math.random() > 0.5
        ? { name: 'john', study: () => console.log('Studying') }
        : { name: 'mary', login: () => console.log('Logging in') };
};

const person = randomPerson();

function isStudent(person: Person): person is Student {
    // return 'study' in person;
    return (person as Student).study !== undefined;
}

// Usage

if (isStudent(person)) {
    person.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
    person.login();
}



// DISCRIMINATED UNIONS AND EXHAUSTIVE CHECK USING THE NEVER TYPE
// Discriminated unions, also known as tagged unions or algebraic data types, are a pattern in TypeScript that combines union types with literal types and type aliases to create a robust type-checking system.
// Each type in a discriminated union has a common, literal property (the discriminant) that TypeScript can use to narrow the type.

// Example of Discriminated Union
interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

// Union of all shapes
type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'rectangle':
            return shape.width * shape.height;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        default:
            // EXHAUSTIVE CHECK USING THE NEVER TYPE
            // The default case should never be reached if all possible cases are handled.
            // Using the 'never' type here helps TypeScript enforce that all cases are covered.
            // If a new shape is added to the 'Shape' type without updating this function, TypeScript will raise a compile-time error.
            const unexpectedAction: never = shape;
            throw new Error(`Unexpected action: ${unexpectedAction}`);
    }
}

const square: Square = { kind: 'square', size: 2 };
const rectangle: Rectangle = { kind: 'rectangle', width: 2, height: 3 };
const circle: Circle = { kind: 'circle', radius: 1 };

console.log(area(square));     // Output: 4
console.log(area(rectangle));  // Output: 6
console.log(area(circle));     // Output: 3.141592653589793