// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";



// Class work

// let greetings= "How are you this morning?"
// const hello = "Hi, Elvis "

// console.log(hello + greetings)

// let x = 500
// let y = 900
// const total = x+y

// console.log("The total is "+ total)

// let class1 = 1000
// let class2 = 865

// if (class1 > class2){
//     console.log('class 1 is bigger')
// }else{
//     console.log("class 1 is not bigger")
// }



// Object Array of Cars key pairs 6

// const Italian_cars = [

// {
//     type:"Fiat", 
//     model:"500", 
//     color:"white"
// },

// {
//     type:"Ferrari", 
//     model:"458", 
//     color:"red"
// },

// {
//     type:"Lamborghini", 
//     model:"Huracan", 
//     color:"green"
// },

// {
//     type:"Alfa Romeo", 
//     model:"Giulia", 
//     color:"black"
// }
// ]



// console.log(Italian_cars)




// const denominations = "FIVE HUNDRED EUROS"

// const denominations_2 = "seven hundred euros"


// // STRING METHODS
// console.log(denominations.length)

// console.log(denominations_2.length)

// console.log(denominations_2.toUpperCase());

// console.log(denominations.toLowerCase());

// console.log(denominations_2.indexOf('d'))

// console.log(denominations.indexOf('H'))

// console.log(denominations.lastIndexOf('E'))

// console.log(denominations.substring(0,12) + "...")

// console.log(denominations_2.slice(-5))

// console.log(denominations_2.replace('seven','sixty two'))





// Functions and Methods
// const person = {
//     name: "Elvis",
//     netWorth: 20000000,
//     speech: function(){

//     }
// }
//  console.log(person.name)




// TODO: DOM (Document Object Model) Manipulation allows you change the structure and style of a web page without reloading it.

// const paragraph = document.getElementById('myparagraph');

// const button = document.getElementById('mybutton')

// button.addEventListener('click',function(){

//     paragraph.textContent = "This is the new content from JavaScript"
// })


// const D = document.getElementById('testdiv')
// const P = document.querySelector('.testp')


// const createSomething = document.createElement('p')

// const makeSomething = document.createElement('m')

// createSomething.textContent = "I was created my by creator."

// makeSomething.textContent = " And it's amazing!"

// D.appendChild(createSomething)

// D.appendChild(makeSomething)


// paragraph.classList.add('highlight')








// 27th March 2024

// Arithmetic operators + * - /
// Comparison operators == !=
// Logical operators && || !

// const paragraph = document.getElementById('myparagraph');
// const button = document.getElementById('mybutton')

// button.addEventListener('click', function(){

//       paragraph.textContent = "This is the new content from JavaScript"
// })

// const D = document.getElementById('myDiv')

// paragraph.classList.add('highlights')



// const elvisNetworth =  300000000;

// const idrisNetworth =  10000000

// if (elvisNetworth == idrisNetworth){

//       console.log("Elvis and are both rich")
// }else {

//     //   console.log("Elvis is richer than Idris")
// }


// elvisNetworth == idrisNetworth ? console.log("Elvis and Idris are both rich") : console.log("Elvis is richer than Idris")


// let num = 400.545574

// console.log(num.toFixed(4))
// console.log(Number.isInteger(num)) 
// console.log(Number.isSafeInteger(num)) 
// console.log(Math.floor(num))
// console.log(Math.round(num))
// console.log(Math.max(100, 300, 700))
// console.log(Math.min(100, 300, 700))

// // GLOBAL VARIABLE

// let a =  500
// let b = 300
// let c = a && b;

// //Arithmetic Operators
// console.log(a + b / c)
// console.log(a - b * c)
// console.log(a / b)
// console.log(a * b)


// // Comparison Operators
// console.log(a > b)
// console.log(a === b)

// // Logical Operators
// console.log(c)
// console.log(a || b)

// // Assignments Operators
// console.log( a += 200)
// console.log( a -= 100)

// Unary Operators
// console.log(++a)
// console.log(--b)
// console.log(--c)

// // Tinary Operators
// let result = (a > b) ? "A is greater" : "B is greater"
// console.log(result)


// let X =  500
// let Y = 600

// // IF ELSE
// if (X > Y){
//       console.log("X is greater")
// }else {
      
//       console.log("Y is greater")
// }

// // IF, ELSE IF, ELSE
// let MichealAge =  19

// if (MichealAge = 65){

//       console.log("You're still qualified for the pension")

// }else if (MichealAge >= 18 && MichealAge < 65 ){

//       console.log("Sorry! come back when you're older")

// }else if (MichealAge > 65){

//       console.log("You're qualified")
// }else{

//       console.log("Please specify your age")
// }



// // LOOP for


// for (let healthRecords = 0; healthRecords < 50; healthRecords++) {
//       console.log(healthRecords); 
//   }


//   const Billionaires = ["Elvis", "Yahya", "Funmi", "Micheal", "Comfort", "Abimbola"]

//   for ( const richPeople of Billionaires ){

//       console.log(richPeople + " is a rich person ")

// }



// Change content, modifies structure
// change styling
// Add or Remove Elements
// Respond to event (click e.t.c)
// Access Element (getElement)


//28th March 2024

// const students =[
//     {name: 'John', age: 23},
//     {name: 'John', age: 23},
//     {name: 'John', age: 23},
//     {name: 'John', age: 23},
//     {name: 'John', age: 23},
//     {name: 'John', age: 23}
// ]
//  console.log(students)



// const class_score = [1,2,3,4,5,6,7,]

// const oldClass = ['Elvis', 'Abimbola', 'Micheal', 'Samuel', 'Wealth']

// oldClass.push("Fortune")

// oldClass.pop(3)

// const newClass = oldClass.splice(0,1, "Sam")

// console.log(newClass)


// let nigerians = ['joe', 'williams', 'cynthia', 'ayo', 'idris']


// let england = ['Elvis', 'Abimbola', 'Micheal', 'Samuel', 'Wealth']

// const newNation = nigerians.concat(england)

// console.log(newNation)



// let numbers = [1,2,3,4,5,6,7,8,9,0]

// let squaredNumbers = numbers.map(num=>num*num)

// console.log(squaredNumbers)




// let fruits = ['banana', 'orange', 'apple'];
// const newFruit = fruits.sort();
// console.log(newFruit)



// let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers)

// function addition()  {
//     let c = a + b

//     return c

// }

// console.log(addtion(90,70))

// // FIXME: come back to this 
// function subtration()  {

//     let c = a - b

//     return c
// }

// // Addition function
// function addition(a, b) {
//   let c = a + b;
//   return c;
// }

// // Test suite
// describe("Addition", function() {
//   it("should return the sum of two numbers", function() {
//     expect(addition(5, 10)).toBe(15);
//   });
// });

// // TODO: change this code 


// Named Functions
 
// function greet(name) {
//     console.log(`Welome back ${name1} and ${name2}`)
// }


// greet("Elvis", "Abimbola")


// ANONYMOUS FUNCTION

// const talk = function(name){
//     console.log(`Hello ${name}`)
// } 

// talk("Micheal")



// ARROW FUNCTION

// const greeting = (name3) => `Hello ${name3}`

// greeting("Busayo")


// Class - OOP

// const Asia = {
    
//     country: ["China", "Japan", "North K", "South K"],
//     language: ["Mandarin", "Japanese", "NK", "SK"]
// }


// const person = {

//     greet(){

//         console.log("Hello")
//     }
// } 

// const John = object.create(person)
// John.greet()


const person = {

    firstName: "Elvis",
    lastName: "Ngerem",
    Address: {
        city: "New York",
        country: "USA"
    },
    age: 27
}

// Destructuring Assignment

const {firstName, lastName, Address:{city,country}, age} = person;

console.log(firstName)
console.log(lastName)
console.log(age)




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}