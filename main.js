'use strict';

function getYearOfBirth(age) {
  return 2019 - age;
}

function createGreeting (name, age){
  const yearOfBirth = 2019 - age;
  return `Hi, my name is ${name} and I'm  ${age} years old`;
}

const greeting1 = createGreeting();
console.log(greeting1);