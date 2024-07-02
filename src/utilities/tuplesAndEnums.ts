import '../style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TUPLE & ENUMS</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

// A tuple is an array with a fixed number of elements, where each element has a specific type.
// Tuples allow you to express an array where the type of a fixed number of elements is known.
let tuple: readonly [string, number, boolean] = ["example", 42, true];

// Note: Using tuple.push adds elements to the tuple, converting it to a regular array and bypassing the type restrictions defined for the tuple. To prevent that, we use the readonly property on the tuple.
// tuple.push("Kelvin")

console.log(tuple);

// Set optional parameter in a tuple
let student: readonly [string, number?] = ['Kelvin']
console.log(student);
