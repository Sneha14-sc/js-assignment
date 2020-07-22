console.log("Multiplication table");
let multi;
let num=prompt("Enter the number:");
document.write(`<h2>Table of ${num}<br></h2>`);
for(i=1;i<=10;i++)
{
    multi=num*i;
    document.write(`${num} x ${i} = ${multi}<br>`);
}