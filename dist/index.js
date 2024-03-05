"use strict";
function greet(firstName) {
    console.log("Hello " + firstName);
}
function sum(a, b) {
    console.log(a + b);
    return a + b;
}
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function delay(fn) {
    setTimeout(fn, 3000);
}
const greet1 = (name) => {
    return `hello, ${name}!`;
};
function isLegalUser(user) {
    console.log(user);
    if (user.age > 18) {
        return true;
    }
    return false;
}
console.log(isLegalUser({
    firstName: "shashwat",
    lastName: "pal",
    email: "email@gmial.com",
    age: 21,
}));
