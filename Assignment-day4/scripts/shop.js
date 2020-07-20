console.log("-------------------------------\nQuestion 3");

let shoppingList = {
            fruits:'Apple',
            snacks:'Chips',
            spices:'pepper',
            dairy:"milk",
}
console.log(shoppingList)
let shoppingBasket = {
    ...shoppingList,
    vegetables:"Tomato,Onion",
    snacks:'Candy',
}
console.log(shoppingBasket)
