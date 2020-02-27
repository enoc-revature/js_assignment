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

    var tempArr = charArr;
    
  // Reverse string
  for(let i=0; i<Math.floor(charArr.length/2); i++){
    temp = charArr[charArr.length-i-1];
    charArr[charArr.length-i-1] = charArr.charAt[i] ;
    charArr[i] = temp;
  }

  return charArr.toString();
}




/*
    4. Factorial
    Define function: factorial(someNum)
    Use recursion to compute and return the factorial of someNum.
*/




/*
    5. Substring
    Define function substring(someStr, length, offset)
    Return the substring contained between offset and (offset + length) inclusively.
    If incorrect input is entered, use the alert function and describe why the input was incorrect.
*/




/*
    6. Even Number
    Define function: isEven(someNum)
    Return true if even, false if odd.
    Do not use % operator.
*/




/*
    7. Palindrome
    Define function isPalindrome(someStr)
    Return true if someStr is a palindrome, otherwise return false
*/




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




/*
    9. Object literal
    Define function traverseObject(someObj)
    Print every property and it's value.
*/




/*
    10. Delete Element
    Define function deleteElement(someArr)
    Print length
    Delete the third element in the array.
    Print length
    The lengths should be the same.
*/




/*
    11. Splice Element
    Define function spliceElement(someArr)
    Print length
    Splice the third element in the array.
    Print length
    The lengths should be one less than the original length.
*/




/*
    12. Defining an object using a constructor
    Define a function Person(name, age)
    The following line should set a Person object to the variable john:
    	var john = new Person("John", 30);
*/




/*
    13. Defining an object using an object literal
    Define function getPerson(name, age)
    The following line should set a Person object to the variable john:
    	var john = getPerson("John", 30);
*/


