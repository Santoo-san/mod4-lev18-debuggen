// Deel 1 opdracht A
const addTheWordCool = function (array) {
  array.push("cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//Deel B
const amountOfElementsInArray = function (array) {
  return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
// 3

//Deel C

const selectBelgiumFromBenelux = function (array) {
  return array[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//Deel D
const lastElementInArray = function (array) {
  return array.pop();
};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

//Deel E

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  const presidents2 = array.slice(1);
  return presidents2;
};

const impeachTrumpSplice3 = function (array) {
  const presidents3 = array.splice(0, 1);
  console.log(presidents3);
  return array;
};

console.log(impeachTrumpSlice(presidents)); //["Obama", "Bush", "Clinton"];
console.log(impeachTrumpSplice3(presidents)); // ["Obama", "Bush", "Clinton"]

//Deel F
const stringsTogether = function (array) {
  const strings2 = array.join(" ");
  return strings2;
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

//deel G
const combineArrays = function (array1, array2) {
  return array1.concat(array2);
};
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]

//deel 2
//opdracht A

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];
const findSpiderMan = function (superheroes) {
  return superheroes.find(function (superhero) {
    return superhero.name === "Spiderman";
  });
};
console.log(findSpiderMan(superheroes));

// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//opdracht B
const doubleArrayValues = function (array) {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number * 2);
  });
  return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

//opdracht C

const containsNumberBiggerThan10 = function (array) {
  return array.some((number) => {
    return number > 10;
  });
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

//opdracht D

const isItalyInTheGreat7 = function (array) {
  return array.includes("Italy");
};
console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// console.log(isItalyInTheGreat7.includes('Italy'));
// result should be true

//Opdracht E

const tenfold = function (array) {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number * 10);
  });
  return newArray;
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

//Opdracht F

function isBelow100(array) {
  return array.every((number) => {
    return number < 100;
  });
}

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]));
// result should be: false, true

const array1 = [1, 2, 3, 4];
const reducer1 = (accumulator1, currentValue1) => accumulator1 + currentValue1;

//Opdracht G
function bigSum(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer);
}

console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
