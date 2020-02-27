/*
-----------------------------------------------------------------------------------
PART I

Create a single Javascript file called homework.js to answer these questions.
Please put the question itself as a comment above each answer.
-----------------------------------------------------------------------------------
*/

/*
    1. Fibonacci
    Define function: fib(n) 
    Return the nth number in the fibonacci sequence.
*/
function fib(n){
  if(n > 1)
    return fib(n-1) + fib(n-2);
  else if(n==1)
    return 1;
  else if(n==0)
    return 0;
  else
    return 0;
}



/*
    2. Bubble Sort
    Define function: bubbleSort(numArray)
    Use the bubble sort algorithm to sort the array.
    Return the sorted array.
*/
function bubbleSort(numArray){
  //var sortedArray = numArray;
  var unsorted = true;
  var temp = 0;

  do{
    unsorted = false;
    for(let i=1; i<numArray.length; i++){
      if(numArray[i-1] > numArray[i]){
        temp = numArray[i-1]
        numArray[i-1] = numArray[i]
        numArray[i] = temp;
        unsorted = true;
      }
    }
  }while(unsorted)

  return numArray;
}



/*
    3. Reverse String
    Define function: reverseStr(someStr)
    Reverse and return the String.
*/
function reverseStr(someStr){
  var temp = 'a';

  // Convert string to an array
  var charArr = new Array(someStr.length);
  for(let i=0; i<someStr.length; i++)
    charArr[i] = someStr.charAt(i);
    
  // Reverse string
  for(let i=0; i<Math.floor(charArr.length/2); i++){
    temp = charArr[charArr.length-i-1];
    charArr[charArr.length-i-1] = charArr[i] ;
    charArr[i] = temp;
  }

  return charArr.join("");
}




/*
    4. Factorial
    Define function: factorial(someNum)
    Use recursion to compute and return the factorial of someNum.
*/
function factorial(someNum){
  if(someNum <= 0)
    return 1;
  else
    return someNum*factorial(someNum-1);
}



/*
    5. Substring
    Define function substring(someStr, length, offset)
    Return the substring contained between offset and (offset + length) inclusively.
    If incorrect input is entered, use the alert function and describe why the input was incorrect.
*/
function substring(someStr, length, offset){
  var charArr = new Array(length+1); // +1 to account for inclusive end-point

  // Validation code
  if(typeof someStr !== 'string' || !(someStr instanceof 'string')){
    alert("ERROR: First argument must by a string");
    return someStr;
  } else if(typeof length !== 'number' || length instanceof 'number'){
    alert("ERROR: Length must be a number")
    return someStr;
  } else if(typeof offset !== 'number' || offset instanceof 'number'){
    alert("ERROR: Offset must be a number")
    return someStr;
  } else if(offset < 0 || length < 0){
    alert("ERROR: Neither length nor offset can be a negative number")
    return someStr;
  } else if(offset > someStr.length || length > someStr.length){
    alert("ERROR: Neigher length nor offset can be larger than the length of the string")
    return someStr;
  } else if(length+offset > someStr.length){
    alert("ERROR: The sum of length and offset cannot exceed the length of the string")
    return someStr;
  }

  // substring
  for(let i=offset; i<=length; i++){
    charArr[i-offset] = someStr.charAt(i);
  }

  return charArr.join("");
}



/*
    6. Even Number
    Define function: isEven(someNum)
    Return true if even, false if odd.
    Do not use % operator.
*/
function isEven(someNum){
  if(someNum/2 == Math.floor(someNum/2))
    return true;
  else
    return false;
}



/*
    7. Palindrome
    Define function isPalindrome(someStr)
    Return true if someStr is a palindrome, otherwise return false
*/
function isPalindrom(someStr){
  // Convert string to an array
  var charArr = new Array(someStr.length);
  for(let i=0; i<someStr.length; i++)
    charArr[i] = someStr.charAt(i);
    
  // Reverse string
  for(let i=0; i<Math.floor(charArr.length/2); i++){
    //console.log(charArr[i] + " " + charArr[charArr.length-i-1])
    if(charArr[i] != charArr[charArr.length-i-1]){
      return false;
    }
  }

  return true;
}




/*
    8. Shapes
    Define function: printShape(shape, height, character)
    shape is a String and is either "Square", "Triangle", "Diamond".
    height is a Number and is the height of the shape. Assume the number is odd.
    character is a String that represents the contents of the shape. Assume this String contains just one character.
    Use a switch statement to determine which shape was passed in.
    Use the console.log function to print the desired shape.
    Example for printShape("Square", 3, "%");
    %%%
    %%%
    %%%
    Example for printShape("Triangle", 3, "$");
    $
    $$
    $$$
    Example for printShape("Diamond", 5, "*");
      *
     ***
    *****
     ***
      *
*/
function printShape(shape, height, character){ // UNFINISHED
  var str = "";
  const shapesEnum = {"Square":1, "Triangle":2, "Diamond":3};
  Object.freeze(shapesEnum);

  switch(shapesEnum[shape]){
    case 1 : printSquare();
             break;
    case 2 : printTriangle();
             break;
    case 3 : printDiamond();
             break;
    default : break;
  }

  function printSquare(){
    for(let row=0; row<height; row++){
      for(let col=0; col<height; col++){
        str += character;
      }
      console.log(str);
      str = "";
    }
  }

  function printTriangle(){
    for(let row=0; row<height; row++){
      for(let col=0; col<=row; col++){
        str += character;
      }
      console.log(str);
      str = "";
    }
  }

  function printDiamond(){
    var firstStr = "";
    var secondStr = "";
    for(let row=0; row<height; row++){
      for(let col=0; col<Math.floor(height/2); col++){
      //for(let col=0; col<height; col++){
        if(col>height/2){ // upper half
          if(col>=row){
            firstStr = firstStr + character;
            secondStr = character + secondStr;
          } else{ // surrounding space
            firstStr = firstStr + " ";
            secondStr = " " + secondStr;
          }
      } else { // lower half
          if(col>=row){ // lower half
            firstStr = firstStr + " ";
            secondStr = " " + secondStr;
          } else{ // surrounding space
            firstStr = firstStr + character;
            secondStr = character + secondStr;
          }
        }
      }
      console.log(firstStr+character+secondStr);
      firstStr = "";
      secondStr = "";
    }
  }
}



/*
    9. Object literal
    Define function traverseObject(someObj)
    Print every property and it's value.
*/
function traverseObject(someObj){
  for(let prop in someObj){
    console.log(prop + " = " + someObj[prop]);
  }
}



/*
    10. Delete Element
    Define function deleteElement(someArr)
    Print length
    Delete the third element in the array.
    Print length
    The lengths should be the same.
*/
function deleteElement(someArr){
  console.log("Length of array is " + someArr.length);
  someArr[2] = null;
  console.log("Length of array is " + someArr.length);
}



/*
    11. Splice Element
    Define function spliceElement(someArr)
    Print length
    Splice the third element in the array.
    Print length
    The lengths should be one less than the original length.
*/
function spliceElement(someArr){
  var newArr = new Array(someArr.length-1);
  console.log("Length of array is " + someArr.length);

  for(let i=0; i<someArr.length-1; i++){
    if(i<2)
      newArr[i] = someArr[i];
    else
      newArr[i] = someArr[i+1];
  }

  console.log("Length of array is " + newArr.length);
}



/*
    12. Defining an object using a constructor
    Define a function Person(name, age)
    The following line should set a Person object to the variable john:
      var john = new Person("John", 30);
*/
function Person(name,age){ // UNFINISHED
  var john = new Person(name,age);
  return john;
}



/*
    13. Defining an object using an object literal
    Define function getPerson(name, age)
    The following line should set a Person object to the variable john:
      var john = getPerson("John", 30);
*/
function getPerson(name, age){ //UNFINISHED
    var john = getPerson("John", 30);
}

