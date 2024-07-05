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