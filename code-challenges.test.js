// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

describe('hitchHikersGuide',()=>{
  it('Is a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized',()=>{
      expect(hitchHikersGuide('people')).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

})
})


// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
//Pseudo Code:

  //Attempt1
  //Create a function that takes in an array
  // const hitchHikersGuide = (array) =>{
  // Then we're going to create a new array that takes the array and iterates through the object name and capitalizes the 0th index of string , then joins it with the sub string, add in the string interpolation and add the occupation object
  //   let newArr = array.map(object => object.name.charAt(0).toUpperCase() + object.name.substr(1) + ' is ' + object.occupation)
  // then return the new array.
  //   return newArr
  // Everything worked except it didnt capitalize the last name 😩.... the hardest one was the 1st one this time.
  //   }
// Attempt 2.... ain't got time for this....
// created a function that takes in an array
const hitchHikersGuide = (array) => {
  //created a variable called answer
  answer = array.map(object =>{
    // This is where the slit lives... for the life of me I couldn't figure out where to put this until I talked to Sahtra about it.
    let names = object.name.split(" ")
    // then I maped through names and turned the 0th index capital and then added name . slice to join the rest
    let newArr = names.map(name =>{
      return name[0].toUpperCase() + name.slice(1)
    })
    // then combind the string in name together then added the string 'is' to the occupation object and returned the answer. 
    return newArr.join(" ") + " is " + object.occupation + "."
  })
  return answer
}
// I'm going to go watch this movie as my reward now.....


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


describe('typeAndDivide',()=>{
  it('function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3',()=>{
      expect(typeAndDivide('hodgepodge1')).toEqual([ 2, 0, -1, 0 ]),
      expect(typeAndDivide('hodgepodge2')).toEqual([ 2, 1, -1 ])
})
})

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// b) Create the function that makes the test pass.
//Pseudo Coding
// we need to create a function that will take in a array 
const typeAndDivide = (array) =>{
  // and then we need to use the filter function to return just the numbers
  let newArr = array.filter(value => typeof(value) === 'number')
  // and last we want to iterate again through here and return all those numbers with their remainders when divided by 3.
   return newArr.map(value => value % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('cubeFirstThenAdd',()=>{
  it('is a function that takes in an array of numbers and returns the sum of all the numbers cubed',()=>{
      expect(cubeFirstThenAdd('cubeAndSum1')).toEqual('99'),
      expect(cubeFirstThenAdd('cubeAndSum2')).toEqual('1125')
})
})



var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.
//Pseudo Coding: 
//so we need to create a function called sumAndCubed and it's going to take in an array
const cubeFirstThenAdd = (array) =>{
// we need to map over our array and cube all our values
let newArr = array.map(value => Math.pow(value, 3))
//then we need to take our new array of cubed values and add them together. 
return newArr.reduce((x, y) => x + y)
}
//winnning...
