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
let tuple: [string, number, boolean] = ["example", 42, true];
console.log(tuple);
