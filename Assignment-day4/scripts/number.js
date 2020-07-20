console.log("-------------------------------------\nQuestion 6");

let checknum=(x)=>(x>100) ? alert("Valid Number"): alert("Number should be greater than 100");

let result,num;
do
{
    num=prompt("Enter the number:");
    result=checknum(num);

}while(num<100);
