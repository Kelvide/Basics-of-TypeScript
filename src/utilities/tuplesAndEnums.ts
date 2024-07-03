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

// Add multiple data to the tuple 
let tupleData: readonly [string, number, ...boolean[]] = ["Hello", 1, true, false, true]
console.log(tupleData)


// ENUM
// Enums in TypeScript are a way to define a set of named constants, which can make your code more readable and maintainable. They can be numeric or string-based
enum ServerResponseStatus {
  success = "success",
  error = 500,
}
// If you have number values with enums you get a reverse mapping but you dont have reverse mapping for type string
console.log(ServerResponseStatus)
// To perform an action specifically for the number values in the enum, we can iterate over all the values in the enum.
Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value)
  }
});

type ServerResponse = {
  data: string[],
  status: ServerResponseStatus,
}

function getServerResponse(): ServerResponse {
  return {
    data: ["First Response", "Second Response", "Third Response"],
    status: ServerResponseStatus.success
  }
}

console.log(getServerResponse());

// Explicit example on ENUM
enum UserRoles {
  admin,
  user,
  vendor
}

type User = {
  id: number,
  name: string,
  role: UserRoles,
  contacts: [string, string]
}

const createUser = (user: User): User => {
  return user;
}

const user: User = {
  id: 1,
  name: "Kelvin",
  role: UserRoles.admin,
  contacts: ["kelv@mail.com", "12345"]
}
console.log(createUser(user))

// Type ASSERSIONS

// Safety: Type assertions are a way to override TypeScript's type inference.
// It's important to use them carefully, as incorrect type assertions can lead to runtime errors.

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16

type Bird = {
  name: string,
}

let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"Poodle"}';

let birdObject = JSON.parse(birdString)
let dogObject = JSON.parse(dogString)

let bird = birdObject as Bird;
let dog = dogObject as Bird

console.log(bird.name);
// This will return undefined because the type was not in dogObject so be careful for scenario like this
console.log(dog.name);

// Non-Casting: Type assertions are purely a compile-time construct and do not have any effect at runtime.
// They do not perform any type conversion; they just tell the compiler to treat a value as a certain type.

let anotherValue: unknown = "another string";
let anotherStrLength: number = (<string>anotherValue).length;

console.log(anotherStrLength); // Output: 14

// Compatibility: The 'as' syntax is generally preferred over angle-bracket syntax,
// especially when working with JSX in React, as the angle brackets can be confused with HTML tags.

interface Person {
  name: string;
  age: number;
}

let person = {} as Person;
person.name = "John";
person.age = 30;

console.log(person); // Output: { name: "John", age: 30 }
