console.log("Check whether the number is even or odd.");

function check(x)
{
    if(x%2==0)
    {
        return 'even';
    }
    else
    {
        return 'odd';
    }
}
let num=prompt("Enter an Integer:");
let result=check(num);

console.log(`The number entered is ${num} and Number is ${result}.`);
