'use strict';

function getYearOfBirth(age) {
  if(age < 0){
    throw new Error ('Age can not be negative');
  }


  return 2019 - age;
}

function createGreeting (name, age){
  const yearOfBirth = 2019 - age;
  return `Hi, my name is ${name} and I'm  ${age} years old`;
}


try {
  const greeting1 = getYearOfBirth(-1);
  console.log(greeting1);
} catch(e){
  console.log(e.message);
}