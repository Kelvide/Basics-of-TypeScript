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

// A better use case of an Alias
type User = { name: string, id: number, isActive: boolean }

const Liv: User = {
  id: 1,
  name: 'Olivia',
  isActive: true,
}

function createUser(user: User): User {
  console.log(`Hello, there ${user.name.toUpperCase()}!!!`)
  return user;
}

createUser(Liv)

// Function for distinguishing between employees and managers
type Employee = { name: string, id: number, dept: string }
type Manager = { name: string, id: number, employees: Employee[] }

type Staff = Employee | Manager

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(`${staff.name} is a manager for ${staff.employees.length} employees`)
  } else {
    console.log(`${staff.name} is an employee in ${staff.dept} depertment`)
  }
}

const favour: Employee = { id: 1, name: "Favour", dept: "QA" }
const steve: Employee = { id: 1, name: "Steve", dept: "HR" }
const Kelvin: Manager = { id: 1, name: "Favour", employees: [favour, steve] }

printStaffDetails(steve)
printStaffDetails(Kelvin)


// Interface
// Interface and Alias do the same work adding methods to interface
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(messgae: string): string;
}

const artOfWar: Book = {
  isbn: 1234,
  title: 'Art of War',
  author: 'Sun Tzu',
  genre: 'Treatise',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`
  }
}

artOfWar.printAuthor();
console.log(artOfWar.printTitle("is a good book!!!"));

// Function to upgrade ram and add methods to interface
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam: (increse: number) => number;
  storage?: number;
}

const laptop: Computer = {
  id: 1,
  brand: "Dell",
  ram: 16,
  storage: 256,
  upgradeRam(amount) {
    return this.ram += amount;
  },
}

laptop.storage = 512;
laptop.upgradeRam(16);
console.log(laptop);
