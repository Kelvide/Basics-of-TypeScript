let name: string = "Elon MUSK";
// Advantage of ts is when you set a specific type to a variable you get suggestions of only methods available for the type example below 
name = name.toUpperCase();
console.log("Name:", name);

// You can also have your variables without been type allocated but ts is smart to detect the type which the variable belong to once it has a value just like this below
let age = 53;
age = age - 1;
console.log("Age:", age);

let is_alive = true;
is_alive ? console.log(name, "is alive.") : console.log(name, "is dead")

// Multi type definition for one variable (Union Types)
let salary: number | string = 300
salary = '$500'
console.log(salary)

// Literal type definition
let apiStatus: 'pending' | 'success' | 'error' = "success"
apiStatus = "pending"

// This will return an error because it is not part of the literals in the variable interface
// apiStatus= "processing"
console.log(apiStatus)