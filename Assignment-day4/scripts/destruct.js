console.log("-------------------------------\nQuestion 2");

const student={
    name:"Helisinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using JavaScript"
    }
}
const {name,age,projects:{diceGame}}=student;
console.log(`Name:${name},\n Age:${age},\n Project:${diceGame}`);
