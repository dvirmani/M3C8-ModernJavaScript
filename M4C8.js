// // Create a for loop in JS that prints each name in this list. myList = “velma”, “explorer”, “jane”, “john”, “harry

const myList = ["velma", "explorer", "jane", "john", "harry"];
for (let index in myList) {
    console.log(myList[index])
}

// Create a while loop that loops through the same list and also prints the names. Note: Remember to create a counter so that the cycle is not infinite.
let counter = 0;
while (counter < myList.length) {
    console.log(myList[counter]);
    counter++;
}

// Create an arrow function that returns "Hello world".

const greeting = () => {
    return "Hello world"
};

console.log(greeting());