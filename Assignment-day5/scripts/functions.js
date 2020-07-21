console.log("Question 1")

let val=prompt("Enter positive numbers separated by (,):");
let array=val.split(',');
console.log(array);

let odd=array.filter(el=>el%2!=0);
let oddcube=array.filter(el=>el%2!=0).map(el=>el**3);

console.log("Odd Elements:"+odd);
console.log("Cube of odd elements:"+oddcube);