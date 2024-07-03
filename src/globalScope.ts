import newStudent, { person, sayHello, type Student } from './actions';

sayHello('TypeScript');
console.log(person);
console.log(newStudent);

const anotherStudent: Student = {
    name: 'bob',
    age: 23,
};

console.log(anotherStudent);