console.log("Grading:");
let garde=function(m)
{
    if(m>=80 && m<=100)
        return 'O';
    else if(m>=60 && m<80)
        return 'A';
    else if(m>=40 && m<60)
        return 'B';
    else 
        return 'C';
}
function garde2(m)
{
    (m>=80 && m<=100)?console.log(`Marks are ${m} and grade is O`):(m>=60 && m<80)?console.log(`Marks are ${m} and grade is A`):(m>=40 && m<60)?console.log(`Marks are ${m} and grade is B`):console.log(`Marks are ${m} and grade is C`);
}

let marks=prompt("Enter your marks:");
let re=garde(marks);
console.log(`Marks are ${marks} and grade is ${re}`);
console.log("Using ternary operator");
garde2(marks);