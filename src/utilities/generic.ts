import '../style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>GENERIC</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`




// GENERICS 
// Generics are a powerful feature in TypeScript that allows you to write flexible, reusable, and type-safe functions, classes, and interfaces.
// By using generics, you can create components that work with any data type while still enforcing type constraints.
let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
console.log(array1);

// Function that accepts any type and return the same type

// Doing this can get very annoying let's use generic to fix that
// function createString(arg: string): string {
//     return arg;
// }
// function createNum(arg: number): number {
//     return arg;
// }

// Instead of the above type function you can set generic function that will accept any type and return any type
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(2);

console.log(someStringValue);
console.log(someNumberValue);

// Using generic for interface
// Define a generic interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value;
  },
};

console.log(genericString)

async function someFunc(): Promise<string> {
  return "Hello World"
}

console.log("Promises with generic", someFunc());


const generateArray = (length: number, value: string): string[] => {
  let result: string[] = []
  result = Array(length).fill(value)
  return result;
}

console.log(generateArray(3, "Hello World"));

// Creating an array of string using generic
function generateArrayGeneric<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  result = Array(length).fill(value)
  return result;
}

console.log(generateArrayGeneric<string>(3, "Hello World"));
console.log(generateArrayGeneric<number>(3, 300));
console.log(generateArrayGeneric<boolean>(3, false));


// Set up a function that accept multiple parameters and different data types
function pair<U, V>(param1: U, param2: V): [U, V] {
  return [param1, param2]
}

const result = pair<number, string>(123, 'Hello')
console.log(result);  // output: [123, 'Hello']
