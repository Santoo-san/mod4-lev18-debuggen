// Deel A
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
