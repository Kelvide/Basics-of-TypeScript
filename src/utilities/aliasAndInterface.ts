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


// INTERFACE provides shape of an object
// Interface and Alias do almost the same work
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
console.log("Using Interface: ", laptop);


// Creating a replica of the above function using Alias
type AliasComputer = {
  readonly id: number,
  brand: string,
  ram: number,
  storage: number,
  upgradeRam(increase: number): number
}

const aliasLaptop: AliasComputer = {
  id: 1,
  brand: "Asus",
  ram: 32,
  storage: 256,
  upgradeRam(amount) {
    return this.ram += amount;
  },
}

aliasLaptop.storage = 1024;
aliasLaptop.upgradeRam(32);
console.log("Using Alias: ", aliasLaptop);

// EXTENDS in TS
interface Person {
  name: string;
  age: number;
  getDetails(): string;
}

// The 'extends' keyword allows EmployeeData to inherit all properties from the Person interface and adds a new property 'employeeId' to the EmployeeData interface.
interface EmployeeData extends Person {
  employeeId: number
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Manager1 extends Person, DogOwner {
  managePeople(): void
}

const person: Person = {
  name: "Doe",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`
  }
}
console.log("Person Data", person.getDetails())

const employee1: EmployeeData = {
  name: "Kyle",
  age: 23,
  employeeId: 10,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, EmployeeId: ${this.employeeId}`
  }
}
console.log("Employee Data", employee1.getDetails())

const manager: Manager1 = {
  name: "bob",
  age: 35,
  dogName: "rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`
  },
  managePeople() {
    console.log("Managing people");
  }
}

console.log("Manager Data", manager.getDetails())
console.log(manager.getDogDetails())
manager.managePeople()


// TYPE GUARD
function getCarData(): Car | Owner | Seller {
  const rand = Math.random()
  if (rand < 0.35) {
    return {
      name: "Rolls Royce Ghost",
      brand: "Rolls Royce",
      year: 2024
    }
  } else if (rand < 0.7) {
    return {
      name: "Rolls Royce Ghost",
      brand: "Rolls Royce",
      year: 2024,
      ownerName: "Kelvin"
    }
  } else {
    return {
      name: "Rolls Royce Ghost",
      brand: "Rolls Royce",
      year: 2024,
      sellingCar() {
        console.log(`${this.name} ${this.year} For Sale`);
      }
    }
  }
}

interface Car {
  name: string;
  brand: string;
  year: number;
}

interface Owner extends Car {
  ownerName: string;
}

interface Seller extends Car {
  sellingCar(): void;
}

const randomCarData: Car | Owner | Seller = getCarData();

// obj is Seller is confirming that the value that will return true is going to be having the interface Seller.
function isForSale(obj: Car | Owner | Seller): obj is Seller {
  return 'sellingCar' in obj
}

if (isForSale(randomCarData)) {
  randomCarData.sellingCar()
}



// DIFFERENCES BETWEEN INTERFACE AND ALIAS

// Merging: Interfaces can be merged; type aliases cannot.
// Complex Types: Type aliases can define complex types (unions, intersections, tuples, etc.) more easily than interfaces.
// Extension: Both can extend other types, but interfaces do so with extends, and type aliases often use intersections.
// Classes: Interfaces are typically preferred for defining the shape of objects, especially when used with classes.


// Interfaces: Use interfaces when you need to define the shape of an object, especially if you need to merge interfaces or extend them in a straightforward manner.

// Type Aliases: Use type aliases for more complex type definitions, including unions, intersections, and when defining types for primitives, tuples, or function signatures.