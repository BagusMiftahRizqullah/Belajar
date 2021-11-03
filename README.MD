### case_one.js

For each of the exercises below, assume you are starting with the following people array.

let people = ["Greg", "Mary", "Devon", "James"];

- Using a loop, iterate through this array and console.log all of the people.
- Write the function to remove "Greg" from the array.
- Write the function to remove "James" from the array.
- Write the function to add "Matt" to the front of the array.
- Write the function to add your name to the end of the array.
- Write the function Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
- Write the function to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
- Write the function that gives the indexOf where "Mary" is located.
- Write the function that gives the indexOf where "Foo" is located (this should return -1).
- Redefine the people variable with the value you started with. Using the splice function, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
  Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

### case_two.js

Your goal in this case is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) output => [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) output => [1,3]

### case_three.js

Create an object that has your firstName, lastName, and occupation as keys.
Access each value from your object using both dot notation and bracket notation.
Add a key for hobby to your object. Remove the key and value for occupation.

### case_four.js

Given the following object below, write code to print the value then the key to the console separated by '=>':

let namesAndHobbies = {
elie: "JavaScript",
matt: "jogging",
janey: "table building",
tim: "sailing"
}

- // Output should be:
- // JavaScript => elie
- // jogging => matt
- // table building => janey
- // sailing => tim
  Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.

Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.
