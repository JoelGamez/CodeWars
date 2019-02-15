// https://www.codewars.com/kata/52b757663a95b11b3d00062d/solutions/javascript
/* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe" */

function toWeirdCase(string){
  let x = string.split("");
  let y = [];
  let z = 0;
 for(let i=0; i<x.length;i++){
   x[i-1]==" "?z=0:null;
   z%2==0?y.push(x[i].toUpperCase()):y.push(x[i].toLowerCase());
   z++;
  }
  return y.join("");
}

toWeirdCase("WRTsdfghgj dfg sd fg ehrfj");
