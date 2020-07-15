console.log("Start");
console.clear();
console.log("HEY, this is the first question of assignment.");
console.log(123);
console.error("Unexpexted error");
console.warn('This is the warning.');

console.time('Hello World!');
let fun=function()
{
        console.log("Function is running..");
}
console.timeEnd('Hello World!');
console.table({'MS.Dhoni':7, 'Virat Kholi':18});
for(let i=0;i<4;i++)
{
console.count(i);
}
console.group('Group');
 console.log("Contents in group");
 console.error("error here");
 console.warn("Warning!!");
console.groupEnd('Group');
console.log("The End");