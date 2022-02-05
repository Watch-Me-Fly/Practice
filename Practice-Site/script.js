// to make un "undefined value"
var x; //because x was never set to anything
console.log(x);

// double == mean equal to
if ( x == undefined ) {
    console.log("x is undefined")};

// now we are defining x
x = 5;
if (x = undefined) {
    console.log("x is undefined");}

else {console.log("x has been defined")}

// string concatination
var string = "hello";
string += " world";
console.log(string+ "!");




// regular math operators
console.log(( 5 + 4 ) / 3 )
console.log(undefined / 5) // this will result in NaN (meaning "not a number")
// same goes here : (a function defined but w/o value)
function test1 (a) {
    console.log(a / 5)
}
test1()




// equality
var x = 4, y = 4;
if (x==y) {console.log("x=4 is equal to y=4")}
// if we change it to string 4 instead of number 4
x = "4"
if (x==y) {console.log("x='4' is equal to y=4")} // type coersion turns this string to a number



// strict equality
if (x === y) {
console.log("strict: x='4' is equal to y=4")}
else {console.log("strict: x='4' is NOT equal to y=4")}




// if statement (all false)
// we can write Boolean() in console of browser to check if a word is true or false in case of debugging for example
if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute")
}
else {
    console.log("all false")
}




// if statement (all true)
if (true && 1 && -1 && "false" && "hello") {
    console.log("all true")
}



// best practice for {}
// on the same line, or the next one?
// is it just a style?
function a() // curly braces on next line in function a example
{
    return //gives undefined as if no return statement was entered (so it is immediately returning) so executing nothing = undefined
    {
        name: "Google"
    };
}
function b() { //curly braces on same line in function b example
    return {
        name: "Googlia"
    };
}
console.log(a());
console.log(b());





// for loop
var sum = 0; // defining a variable
for (var i = 0; i <10; i++) { //looping from 0 to 9, and summing up everything in between.
    console.log(i, "index"); 
    sum = sum + i;
}
console.log("sum of 0 through 9 is : " + sum )





var userName = document.getElementById // how to define html ids in js
// query selector all - pour toute les classes
// angular
// Vu.JS



// default values
function orderChickenWith (sideDish) {
    if (sideDish === undefined) {
        sideDish = "Side Dish"
    }
    // an equal way of writing this -if statement- is by using the boolean values as following : (note: || means 'or')
    // sideDish = sideDish || "Side Dish"; 
    // the || statement checks and prints whatever is more "true" to js
    console.log ("chicken with "+ sideDish);
}
orderChickenWith ("noodles");
orderChickenWith (); // in here, without providing a value to sideDish, we will get "chicken with undefined". so we need to define a value for when values are not provided, it can replace them. (added on line 115). now it prints out "side dish", the new value provided by the -if- statement.





// object ()
// turning a variable into an object :
var company = new Object();

// in JS; mentioning a never mentioned property creates it, in here, we never mentioned property "name"
company.name = "Facebook";
console.log(company); // will give us result : ---Object { name: "Facebook" }---

//company.ceo.firstName = "Mark";
//console.log(company); // will give me an error, because company.ceo was not defined, and we added to it firstName. should define the first one before.

company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("company CEO name is " + company.ceo.firstName); // to turn it into a string presentation

console.log(company["name"]); // [] will retreive the value of name and will only presents the value, putting it in "" to present it the value of property as string

// the dot notation will only work with whatever is a valid JavaScript identifier, or valid JavaScript, either function name, or valid JavaScript variable name.

// if we want to leave spaces in the name of a property, we register the name in []
company["Stock of company"] = 110; // setting the name of property between [] variable value to 110
console.log(company);
console.log("Stock price is "+ company["Stock of company"]);
// or to facilitate it, we can set a variable name to the string
var stockProp = "Stock of company";
company[stockProp] = 200;
console.log("Stock price is "+ company[stockProp]);





// better way to create objects : object literal syntax
var facebook = {
    name: "Facebook",
    ceo: { // sub-object inside object
        firstName : "Mark",
        favColor: "blue" // no comma after the last property
    },
    $stock: 110,
    "Text with spaces is possible too" : "its value"
}; // we set an object literal using the curly braces {} and properties go inside
console.log(facebook);
console.log(facebook.ceo.firstName);






// functions // functions ARE objects // are First Class Date Types
// ask Fanny about WTF this is
function multiply (x, y) {
    return x * y;
}
console.log(multiply (4, 5)); 
console.log(multiply); // typing only the name of the function without what's inside (), will get the console to print function equation

// function factories
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc;
};
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleALL = makeMultiplier(2);
console.log(doubleALL(100));

// passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
};
var result = doOperationOn(5, multiplyBy3);
console.log(result);




// passing variables by reference
var a = { y: 7 };
var b = a;
console.log(a);
console.log(b);
// changing the value of y inside b
b.y = 5;
console.log("after b.y updated: ");
console.log(a);
console.log(b);



// arrays
var animals = ['cat', 'dog', 'chicken'];
// adding an element to the array (will be the last element)
animals.push('frog');
// removing an element from the array , indicating starting and ending points (element 1 to element 1)
animals.splice(1,1)
// order elements by name:
animals.sort();
// how long is the array? (how many elements)
animals.length;
// get the name of the last element in the array (in arrays, the last number is -1 of length, because it starts with 0)
animals[animals.length-1];




// function constructors, prototypes, and the 'this' keyboard
function Circle(argument) {
    this.argument = radius;
}
Circle.prototype.getArea =
function () {
    return Math.pi * Math.pow(this.argument, 2);
}

var myTest = new Circle(10);
console.log(myTest);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);