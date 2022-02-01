

// Single line comments start with //

// Multi-line comments start with /* and end with */

let carNaame = "Volvo";

let person = "John Doe",
carNamee = "Volvo",
price = 200;

/* If you re-declare a JavaScript variable declared with var, it will not lose its value.
The variable carName will still have the value "Volvo" after the execution of these statements: 
CON LET Y CONST NO PASA*/

var carNamjke = "Volvo";
var carNamek;

let xx = "5" + 2 + 3; // 523

//Variables declared inside a { } block cannot be accessed from outside the block CON LET Y CONST

// Redeclaring a variable with let, in another block, IS allowed:
    let xi = 2;    // Allowed
    
    {
    let xi = 3;    // Allowed
    }
    
    {
    let xi = 4;    // Allowed
    }


    // CONST
/* 
    Variables defined with const cannot be Redeclared.
    Variables defined with const cannot be Reassigned.
    Variables defined with const have Block Scope. */
/* 
    Use const when you declare:
    A new Array
    A new Object
    A new Function
    A new RegExp

    you CAN:
        Change the elements of constant array
        Change the properties of constant object
*/
    

var xa = 2;     // Allowed solo con var
var xa = 3;     // Allowed
xa = 4;         // Allowed

//Operators

/* 
    **	Exponentiation (ES2016)
    /	Division
    %	Modulus (Division Remainder)
    ++	Increment
    --	Decrement 
*/

/*

Operator	Example     Same As
    =	    x = y	    x = y
    +=	    x += y	    x = x + y
    -=	    x -= y	    x = x - y
    *=	    x *= y	    x = x * y
    /=	    x /= y	    x = x / y
    %=	    x %= y	    x = x % y
    **=	    x **= y	    x = x ** y
    <<=	x   <<= y	    x = x << y
    >>=	x   >>= y	    x = x >> y
    >>>=    x >>>= y	x = x >>> y
    &=	x   &= y	    x = x & y
    ^=	x   ^= y	    x = x ^ y
    |=	x   |= y	    x = x | y
    **=	x   **= y	    x = x ** y

*/

//The += assignment operator can also be used to add (concatenate) strings:
let text1 = "What a very ";
text1 += "nice day";

/*
Operator	Description
    ==	    equal to
    ===	    equal value and equal type
    !=	    not equal
    !==	    not equal value or not equal type
    >	    greater than
    <	    less than
    >=	    greater than or equal to
    <=	    less than or equal to
    ?	    ternary operator

Operator	Description
    &&	    logical and
    ||	    logical or
    !	    logical not
*/

let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object

let algo= 0;
algo=15;
console.log(algo)

let y = 123e5;      // 12300000
let z = 123e-5;     // 0.00123


//TYPEOF
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

//FUNCTION
/* 
Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked. */

// code here can NOT use carName

function myFunction() {
    let carnName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

//OBJETSO
//You can access object properties in two ways:

objectName.propertyName
objectName["propertyName"]

//ACCESS METHODS
objectName.methodName() //parentesisss

//EVENTOS
    /*
    examples of HTML events:

    An HTML web page has finished loading
    An HTML input field was changed
    An HTML button was clicked

    HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

    <element event='some JavaScript'>

    <button onclick="this.innerHTML = Date()">The time is?</button>
    */
   
    /*
    Common HTML Events

        Event	    Description
        onchange	    An HTML element has been changed
        onclick	        user clicks an HTML element
        onmouseover	    The user moves the mouse over an HTML element
        onmouseout	    The user moves the mouse away from an HTML element
        onkeydown	    The user pushes a keyboard key
        onload	        The browser has finished loading the page

    */