// test de valeur et if
let SomeBool = true;
let nullValue = null;
let someArray = [];
let someObject = {
    key: "value",
    key2: "value2",
};
console.log(someObject.key);

if (someObject.key === "value")
    {

    console.log("key is value");
    } 
    else {
        console.log("key is value2");
}


// test tableau
const fruits = [
    "apple",
    "banana",
    "orange",
];

fruits.push("grape"); // Ajoute le mot grape au tableau
console.log(fruits); // apple, banana, orange, grape

// Objet
const sky = {
    firstname: "adrien",
    lastname: "castel",
    age: 19,
    isStudent: true,
    hobbies: ["gaming", "sport"],
};

console.log(sky.firstname); // adrien
console.log(sky.hobbies[1]);


// destructring
/*const { firstname, lastname, age} = sky;
console.log(firstname); // adrien
console.log(lastname); // castel
console.log(age); // 19*/

// Spread operator
const someVariable = [...fruits, "kiwi"];
console.log(someVariable); // Valeur tableau fruits+kiwi
