console.log("---------------------------\nQuestion 2");

class User
{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=0;
        this.course=[];
    }
        login()
        {
            console.log(`${this.name} has logged in`);
            return this;
        }
        logout()
        {
            console.log(`${this.name} has logged out`);
            return this;
        }
        getDetails()
        {
            console.log(`Name is ${this.name}, email is ${this.email}`);
            return this;
        }
}
class Moderator extends User
{
    constructor(name,age,email,lucoins)
    {
        super(name,age,email);
        this.lucoins=lucoins;
    }
    addCoins(user)
    {
        user.lucoins++;
        console.log(user);    
    }
    removeCoins(user)
    {
        users=users.filter(u=>{
           return u.lucoins!=user.lucoins;})
    }
}
class Admin extends Moderator
{
    constructor(name,age,email,lucoins,course)
    {
        super(name,age,email,lucoins);
        this.course=course;
    }
    addCourse(user,co)
    {
        user.course.push(co);
        console.log(user);    
    }
    removeCourse(user)
    {
        users=users.filter(u=>{
           return u.course!=user.course;})
    }
}

let user1= new User('Riya',22,'r1@gmail.com');
let user2= new User('Roshan',24,'rosh@gmail.com');
let user3= new Moderator('Siya',26,'s1@gmail.com',5000);
let user4= new Admin('Soham',28,'so@gmail.com',8000,['Java','Python']);
let users=[user1,user2,user3,user4];
user1.login();
users.forEach(element=>{
    console.log(element);
});
user4.logout();
user3.addCoins(user1);
user3.removeCoins(user3);
user4.addCourse(user2,'javascript');

users.forEach(element=>{
    console.log(element);
});