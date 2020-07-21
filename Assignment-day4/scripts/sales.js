console.log("Question 5");

let sale=prompt("Enter the total amount sold by the employee:");
let cal,sale1;

if(sale>0 && sale<=5000)
    cal=2;
else if(sale>5000 && sale<=10000)
    cal=5;
else if(sale>10000 && sale<=20000)
    cal=7;
else
{
    sale1=sale-20000;
    cal=10;
}
let count=0;
switch(cal)
{
    case 10:count=(0.1*(sale1));
            console.log(count);
    case 7:if(sale>=30000)
                count+=(0.07*sale1);
           else
                count+=(0.07*5000);
           console.log(Math.round(count));
    case 5:count+=(0.05*5000);
           console.log(count);
    case 2:count+=(0.02*5000); 
           console.log(count);
           break;
    default:console.log("Invalid");
}
console.log("Total Commission earned by employee : "+count);
