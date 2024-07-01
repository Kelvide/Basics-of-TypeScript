import '../style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>ALIAS & INTERFACE</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

// Alias
// An alias is created using the type keyword. It allows you to define a new name for a type. This can be useful for simplifying complex type declarations or for improving code readability. EXAMPLE BELOW:
type StringAlias = string;
let greeting: StringAlias = "Hello, TypeScript!";
console.log(greeting);

type User = { name: string, id: number, isActive: boolean }

const Liv: User = {
    id: 1,
    name: 'Olivia',
    isActive: true,
}

function createUser(user: User): User {
    console.log(`Hello, there ${user.name.toUpperCase()} !!!`)
    return user;
}

createUser(Liv)