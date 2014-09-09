/*
     Name: Edward Snyder	
     Date:9/4/14
     Class & Section:  PWA1-####
     Comments: "Goal 2: JavaScript Practice"
 */

// scope wrapper (self executing function)
//(function(){
	
/* 
	===============================================
	RESEARCHING
	-----------------------------------------------
	To find documentation, use http://dochub.io
*/	
	
	
/* 
	===============================================
	RECAP:  Data Types
	-----------------------------------------------
     "string"			              string literal
     1, 3.14, 10e10			  number literal
     TRUE / FALSE			  boolean literal
     ["a", "b", "c"]				  array literal
     function(arg, arg2){}	  function literal
     undefined					  undefined
*/
	

/*
	===============================================
	RECAP:  Variable Declarations
	-----------------------------------------------
	syntax, comma separated, undefined declarations
*/

//console.log('------Recap Variables ----------');



/*
	===============================================
	RECAP:  conditionals
	-----------------------------------------------
    syntax, condition, different types of conditionals

	a CONDITION is a boolean test between two values, the resulting boolean can be saved 

		comparison operators:
		<, >, >=, <=,!=,!==,!

		conditional syntax:
			if (condition) {
	  			//block of code or ‘actions’
			};

		== 	is the equality operator, does not check against data type
		=== is the identity operator, checks data type match - will use this

        Best Practice:  Use identity operator 99% of the time
*/	

//console.log('------Recap Conditionals ----------');


	/* 	==============================================================
		if - else statements (allows only for one option)
			
		if (a < b){
			//execute this block of code if a is less than b
		}else{
			//execute this block of code
		};
  		================================================================
  	*/



	/* 	==============================================================
		if - else if - else statements (allows for multiple conditionals

		if (a < b){
			//execute this block of code if a is less than b
		}else if{
			//execute this block of code
		}else{
			//execute this block of code
		};
  		================================================================
  	*/



  	/*
         Logical Operators
             && = AND
             || = OR
	*/



	/*
		Ternary conditional:

		    conditional ? true : false;

			same as:

				if (weather === "Cloudy"){
					mood = 
				}else{
					//false
				};
	*/


/*
	===============================================
	RECAP:  Functions
	-----------------------------------------------
	syntax, arguments, returns, variable scope
*/

//console.log('------Recap Functions ----------');

    //	1.  BASIC FUNCTION:



    //	2.  ANONYMOUS FUNCTION



    //Anonymous passing arguments


    //Anonymous passing arguments WITH RETURN



/*******************************************************************
 	REVIEW COMPLETE
*******************************************************************/


/*
	===============================================
	MORE:  Strings
	-----------------------------------------------
*/

//console.log('------ MORE Strings ----------');

//var str1 = 'I love JavaScript! ';
//var str2 = 'JavaScript loves me!';
//var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


// Use charAt() to console.log the 'v' in str1.
//console.log(str1.charAt(4));  //return character at index 4


// Use indexOf() to console.log the index of 'm' in str2.
//console.log(str2.indexOf('m'));  //this will tell us where (index) m is in the array

// Use lastIndexOf() to console.log the last 'a' in str1.
//console.log(str1.lastIndexOf('a'))  //index 10

// Use length to console.log the length in str1.
//console.log(str1.length); //returns the number of characters in string 1 = 19


// Use split() to console.log an array of the ABC's using the abc variable.
// EX: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//console.log(abc.split(''));  //This results in each letter being in quotes and in [] brackets as an array.

//STUDENT ACTIVITY 1:
// Use substr() to console.log 'JavaScript!' from str1.
//console.log(str1.substr(7,11));  //go to index 7 and take next 11 characters it returns -JavaScript!-

// Use concat() to console.log 'I love JavaScript ! JavaScript loves me!' with str1 and str2.
//console.log(str1.concat(str2));  //Concatenates I love JavaScript! JavaScript loves me


//STUDENT ACTIVITY 2:
// Use substring() to console.log 'JavaScript' from str2.

//console.log(str2.substring(0,10));  //Returns -JavaScript //
//Returns the characters in a string between two indexes into the string

//STUDENT ACTIVITY 3:
// 1. Use toLowerCase() to console.log the str1 all in lowercase letters. //makes entire string lowercase
// 2. Use toUpperCase() to console.log the str1 all in uppercase letters. //""   "" uppercase

//Use toString()to console log the type o str1.
  // console.log(typeof str1.toString());    //typeof means what is to the right
   //(to string - Returns a string representing the specified object.  Returns -string-




 // var weather = "Cloudy";
 //    if (weather === "Sunny"){
//		  bobsMood = "happy" ;
//	  }else{bobsMood= "sad" ;
//	 }
	     
          //Console.log



/*
	===============================================
	MORE:  Numbers
	-----------------------------------------------
*/

//console.log('------ MORE Numbers ----------');

 //  var num = 457896;
 //  var dec = 33.123456;

// Use toExponential() console.log num in exponential notation with two decimals.
 //  console.log(num.toExponential(2));  //returns 4.58e+5 -
    //take the number give it two decimal pts (4.58...) all after is the exponential.


// Use toPrecision() console.log dec as four numbers.
 //  console.log(dec.toPrecision(4));  //returns 4 numbers 33.12



//STUDENT ACTIVITY 4:
//What method would you use to console.log the variable dec with two decimals.
 //  console.log(dec.toFixed(2));

// Use toString() to console.log the type of num.
//   console.log(typeof num.toString());   // changes to -string

/*
	===============================================
	MORE:  Booleans

	TRUTHY / FALSY
	-----------------------------------------------
	Because of JavaScript's loose syntax, some values are == false, 
	we call these FALSY.
		
		false 		== false  	| true
		0 			== false	| true
		"" 			== false	| true
		undefined 	== false	| true  //var does not exist
		NaN 		== false	| true 
	
	So the following conditional fails...
	-----------------------------------------------
*/

//console.log('------ MORE Booleans ----------');


	
/*
	===============================================
	MORE:  Arrays
	-----------------------------------------------
*/

//console.log('------ MORE Arrays ----------');

//var arr1 = [1, 2, 3, 4, 5, 6, 7];
//var arr2 = ['a', 'b', 'c', 'd', 'e'];
//var arr3 = ['apple', 'orange', 50393, 7.324];

// indexOf()
//Returns the first (least) index of an element within the array equal
//to the specified value, or -1 if none is found.




//console.log(arr2.indexOf('c'));  //returns (2) c is index 2


// join()
// Joins all elements of an array into a string.
//console.log(arr2.indexOf('c'));
//returns a,b,c,d,e

// pop()
// Removes the last element from an array and returns that element
// shift() removes the first element from an array.
  // var element = arr1.pop();
   //console.log(element);  //returns 7  //"pop's" off last number
  // console.log(arr1);  // returns [ 1,2,3,4,5,6]


// push()
// Adds one or more elements to the end of an array and returns the new
//   length of the array
// unshift() - Adds one or more elements to the front of an array.
  // arr2.push('f');   //returns array ^ plus "f"
   //console.log(arr2);

// reverse()
// Reverses the order of the elements of an array
   //console.log(arr1.reverse());  //Reverses ^ array

// splice()
// Adds and/or removes elements from an array.
   //console.log(arr.1);  //listed array
   //console.log(arr1.splice(4,2));  //spliced 2,1 out of the array
                        //went to index 4 and removed last two items.
   //console.log(arr.1);  //[6 5,4,3]

// forEach()
// Calls a function for each element in the array.
    console.log(arr1);  // returns the array [6,5,4,3]
    arr1.forEach(function(element, index, array){

        console.log('element', element);
        //element 6 - element 5 - element 4 etc...
        console.log('index', index);
        //index 0 - index 1 - index 2 etc..
        console.log('array', array);
        //[6,5,4,3] - [6,5,4,3] - [6,5,4,3] etc..
    });

//forEach is a LOOP!!!




/*******************************************
 STUDENT ACTIVITY 5:

 1.  concatenate the firstQtr and secondQtr arrays and store the results in the
        variable combined
 2.  console.log the results stored in the variable combined
 3.  combine all three arrays and stored the results in the variable combined
 4.  console.log the results stored in the variable combined

 Use the combined variable for items 5 and 6 the below:
 5.  join the array elements into a string and console.log the results
 6.  remove the last element of the array and console.log the results and the new array
 7.  use array "secondHalfYr", and reduce the array to "Sept" & "Oct"
        and console.log the results
 ********************************************/

   var firstQtr = ["Jan", "Feb", "Mar"];
   var secondQtr = ["Apr", "May", "Jun"];
   var secondHalfYr = ["Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
   var combined;

    var combined = firstQtr.concat(secondQtr); //use "concat" to combine
    console.log('Concat 2 arrays:', combined);

    //Problem 5
    var combine = firstQtr.concat(secondQtr,secondHalfYr);
    console.log('Concat 3 arrays:',combine);

    console.log('Joined Arrays:', combined.join());
            //Since all arrays were joined, we can use
            //combined to "join" them as a string
            //returns - Jan,Feb,Mar,Apr etc...

    //Problem 6
    console.log('Took out - ',combined.pop()); //pops off last variable in combined
        //returns all months except Dec. popped it off
    console.log('Show Array: ',combined);

    //Problem 7
    var results = secondHalfYr.slice(2,4);
    //went to index two and took out Sept and Oct.
    //IMPORTANT it does not take index 4 only 2&3
    //it STOPS at index 4!!!
    console.log('slice:',results);


/*

	===============================================
	MORE:  Operators (typeof())
	-----------------------------------------------
	
	How to test for a variable's existence (typeof)	
*/

//console.log('------ MORE Operators - typeof() ----------');
//

/*
	===============================================
	MORE:  Conditionals (switch())
	-----------------------------------------------
	
	- “if” conditionals are perfect for comparing several sets of varying conditions  
	- switch statements will evaluate a single conditional expression and
		then perform an equality check against possible cases

	Traditional IF and IF Else
	if (condition) {
		// statements1
	};

	if (condition) {
		// statements1
	} else {
		// statements2
	};	

*/

//console.log('------ MORE Conditionals - Switch ----------');

/*******************************************
 STUDENT ACTIVITY 6:

	1.  create a "Switch" conditional that does the following:
		a.  have a var named "age" initialized to a number
		b.  if age 13 then console.log "child"
			if age 18 then console.log "adult"
			if no age then console.log "No answer"
********************************************/

   //var age = 18;
   //  switch (age){
     //    case 13:
       //      console.log('Child');
         //    break;
    //     case 18:
      //       console.log('Adult');
        //     break;
    //     default:
      //       console.log("No Answer");
        //     break;
   //  }

/*
	===============================================
	MORE:  Functions
	-----------------------------------------------

	- we reviewed returns and we went through examples with returns only 
		returning one value
	- below shows how to returning multiple values using arrays

*/

//console.log('------ MORE Functions ----------');
  var bondsCars = function(){
    return ["ferrari", "lambo", "vwBug"];
  };

  var cars = bondsCars();  //will return the array of value
    console.log('James Bonds cars: ', cars);

	/* 
		Self Executing Functions
	
		(function(){   //this is a basic function which includes () at end
			//code goes here
		})();          //the () tells the function to run immediately

		Normal function:
			var fn = function(){};  //a normal function
		
			fn();	//invoking the fn function

			self function - combining the 2 statement above
				var fn = (function(){})();	
	*/	


/*
	===============================================
	For / While Loop, basic logic structure
	-----------------------------------------------
	
	Normal Operations:
		1. initialize a counter;
		2. loop/repeat a block of code until condition is met;
			the condition that a loop checks for is usually against the counter variable
		3. the most common use of loops is to cycle through all the 
			values of an array or other forms of data set (such as objects)
		4. a counter is needed in the loop - which is a simple numeric 
			variable that increases or decreases 
			- common variable names for counters are i and x - most developers 
				reserve these names for this purpose

	WHILE LOOP:  while()
		- the while loop is the simplest conditional loop
		- before the code is executed, the condition is checked
		- if it evaluates to true, the code is run, and the loop returns to the 
			condition check again
		- it will repeat this process until the condition becomes false, which 
			will then skip the code and exit the loop
		
		Basic While Loop:
			while ( condition ) {
				//code goes here
			}			
*/
console.log('------ While / Loop ----------');
    var numOfBeers= 10;
    while (numOfBeers > 0){
        console.log(numOfBeers + 'Kegs on the wall');
        numOfBeers--;
    }
    //returns;
    // 10 Kegs on the wall.
    // 9 Kegs on the wall. etc...
    // all the way to 1 Kegs on the wall

	
/*
	===============================================
	For Loop, prebuilt logic structure
	
	for(initialize; condition; increment){}

	FOR LOOP: for()
		- a for loop is an increment-based loop, where the increment is 
			part of the condition
		- there are 3 statements inside the condition of a for loop: 
			a.  first a counter variable is initialized
			b.  second the “condition check”
			c.  and third, increment the variable and perform the code 
				till the end of the loop 
			d.  each is separated by semicolon, just like normal statements

		Basic FOR Loop:
			for ( var i = 0;  i < 5;  i++ ) {
				//code goes here
			};
*/

console.log('------For Loop ----------');

    for (var beers = 10; beers>0; beers --);{
        console.log(beers + 'bottles of beer on the wall')
    };
	/* 
		array.Length
	
		- if we wanted to cycle through all the values in an array, 
			we need to know how many values are in the array
		- this is where the .length property comes in - this will return 
			a number value, equal to the number of elements in the array 
		- an array’s numeric index begins at 0  
		- in the example below, the last index of the array would be 4 
			- the  .length property returns the count, which would be 5	
	*/	
        var myNums = [1,2,3,4,5];
        console.log('length:', myNums.length);  //Returns- length: 5

	/* 
		using the for() loop with .length

		- the for loop is the most commonly used in programming, since 
			the increment makes it easy to cycle through arrays or objects.  
		- to cycle through each index of an array, we could use the .length 
			property, and use the counter i as the index, such as:

		for ( var i=0; i<myNums.length; i++){
			console.log( myNums[i] );
		};

		- however, this is not the most efficient way...
		- it is inefficient on the CPU

		- depending on the size of an array, it can be more efficient to 
			save the array length in a variable, inside the first statement
	*/  var myNums = [1,2,3,4,5];
         for (var i=0; i<myNums.length; i++){ //not efficient
         for (var i= 0, j=myNums.length; i<j; i++){ //most efficient
         //set up 2nd variable (j=myNums.length) only processes once.
          //
          //  console.log(myNums[i]);
               //Returns same results as below
        }
        //using the myNums from above [1,2,3,4,5]
        //for loop!
        //i=index,if i is less than whatever the length
        //is of the array or object than continually run
        //the block of code.
        //returns - 1
            // 2
            // 3 etc.. to 5

	/*
		BREAK...

		- in some situations, you may need to force a loop to stop
		- by using the "break" statement, any loop will stop running at the 
			break point, and perform no more iterations
	*/
    var myNums = [1,2,3,4,5];
    for (var i= 0, j=myNums.length; i<j; i++) { //most efficient
        //set up 2nd variable (j=myNums.length) only processes once.
        if (i === 3);
        console.log('testing out the break and it broke');
        break;
    };
    console.log('2.length in for loop:',myNums[i]);
    //returns: 2. length in for loop: 1
    //         2. length in for loop: 2
    //         2. length in for loop: 3
    //      testing out the break and it broke
    //          **went through the loop 3x and broke.



	/*
		CONTINUE...

		- while the break statement will stop a loop and exit it, the continue 
			statement will stop a loop’s current iteration, and continue 
			on to the next iteration
	*/
    var myNums = [1,2,3,4,5];
    for (var i= 0, j=myNums.length; i<j; i++) { //most efficient
    //set up 2nd variable (j=myNums.length) only processes once.
    if (i === 3);
    console.log('testing out the break and it broke');
    continue;
};
console.log('length in for loop:',myNums[i]);
    //this will console.log 'testing out the break and it broke -message
    // but will continue through 5x's
    ////returns: length in for loop: 1
//               length in for loop: 2
//               length in for loop: 3
//          testing out the break and it broke
        //       length in for loop: 5

    //it looped to 3, broke, went back up looped again
    //to 5.

/*******************************************
 STUDENT ACTIVITY 7:

	1.  create an array with the following cartoon characters
		(Superman, Batman, Wolverine, Iceman)

		a.  create a for loop using the slower method (3 parameters)
			- in the loop just console.log the values
		b.  create a for loop using the faster method ( .length added to variable (i.e. j=myNums.length;)
            in(4 parameters)
			- in the loop just console.log the values
********************************************/
    var characters = ['Superman', 'Batman', 'Wolverine', 'Iceman'];
        for (var i= 0; i<characters.length; i++){
            console.log(characters[i]);
         };  //Returns- Superman / Batman / Wolverine / Iceman


             var characters = ['Superman', 'Batman', 'Wolverine', 'Iceman'];
             for (var i= 0, j=characters.length; i<j; i++){
                 console.log(characters[i]);
             };  //.length - FASTER METHOD


/*******************************************
    STUDENT ACTIVITY 8: (More Practice):

     1.  output "name" in lowercase
     2.  output "name" in uppercase
     3.  output the character in the 3rd index
     4.  output the index number where the work "nice" us located
     5.  output the characters in "name" between indexes 10 & 14
     6.  create a array variable using "name", and output the array
     7.  output the item in index 4
     8.  join all elements of the array separated by a "|"
     9.  output the array in reverse order
     10. output the current array without the first item
     11. output the array with a new item at the end of the array
     - add "NEW VALUE"
     12. output the array without "NEW VALUE"
********************************************/

  //  console.log('------ More PRACTICE ----------');

  //  var name = 'This is a nice change of pace';



//})();