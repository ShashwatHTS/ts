// number, string, boolean, null, undefined

function greet(firstName: string) {
  console.log("Hello " + firstName);
}
// greet("shashwat")

// sum of function

function sum(a: number, b: number) {
  console.log(a + b);
  return a + b;
}

// sum(2,3)

// return true or false based on if a user is 18+

function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

// console.log(isLegal(true))

// create a function that takes another function as input. and runs it after 3 seconds

function delay(fn: () => void) {
  setTimeout(fn, 3000);
}
// delay(function(){
//     console.log("hello")
// })
const greet1 = (name: string) => {
  return `hello, ${name}!`;
};

// console.log(greet1("shashwat"));

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

function isLegalUser(user: User) {
  console.log(user);
  if (user.age > 18) {
    return true;
  }
  return false;
}

console.log(
  isLegalUser({
    firstName: "shashwat",
    lastName: "pal",
    email: "email@gmial.com",
    age: 21,
  })
);
