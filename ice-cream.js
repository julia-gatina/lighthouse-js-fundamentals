// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

//1. Add the flavour "root beer" to the array without modifying the original array. 

iceCreamFlavours.push('root beer');
console.log(iceCreamFlavours);


// 2. get the first flavour
const firstFlavour = iceCreamFlavours[0];
console.log(firstFlavour);


//3. get the last flavour

const lastFlavour = iceCreamFlavours.at(-1);
console.log(lastFlavour);


//4. console.log the resulting number of flavours in the array

const arrayLength = iceCreamFlavours.length;
console.log(arrayLength);


