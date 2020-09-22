const superHeroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

//Deel 1
//array van allen superhelden namen
console.log("deel 1");
function getFullnames(item) {
  const fullname = [item.name];
  return fullname;
}
console.log(superHeroes.map(getFullnames));

//Deel 2
//array van alle lichte helden (<190 pounds)

console.log("deel 2");
function getLightweightSuperHeroes(value) {
  if (value.weight <= 190) return [];
}
console.log(superHeroes.filter(getLightweightSuperHeroes));

//deel 3
console.log("deel 3");
const filterMidweightSuperHeroes = superHeroes.filter((superHero) => {
  return superHero.weight == 200;
});
console.log(filterMidweightSuperHeroes);
// console.log(superHeroes.filter(filterMidweightSuperHeroes));
const getNamesMidweightSuperHeroes = filterMidweightSuperHeroes.map((hero) => {
  return hero.name;
});

console.log(getNamesMidweightSuperHeroes);

//deel 4

console.log("deel 4");
const getFirstAppearance = superHeroes.map(
  (appearance) => appearance.first_appearance
);
console.log(getFirstAppearance);

//deel 5
console.log("deel 5");
const superHeroesDCComics = superHeroes.filter(
  (hero) => hero.publisher == "DC Comics"
);
console.log(superHeroesDCComics);

// deel 5.b
const superHeroesMarvelComics = superHeroes.filter(
  (hero) => hero.publisher == "Marvel Comics"
);
console.log(superHeroesMarvelComics);

//deel 6
console.log("deel 6");

const totalWeight = superHeroesDCComics
  .map((hero) => {
    return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
  })
  .reduce((weight1, weight2) => weight1 + weight2);

console.log(totalWeight);

console.log("deel 7");

const totalWeight2 = superHeroesMarvelComics
  .map((hero) => {
    return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
  })
  .reduce((weight1, weight2) => weight1 + weight2);

console.log(totalWeight2);

console.log("The-End");

//deel 8

console.log("deel 8");
console.log(
  "functie voor alle helden: if huidige held > zwaarste held tot nu toe return huidig,  else return zwaarste"
);

// const getFullnames2 = (item) => {
//   return [item.name];
// };
// function getFullnames(item) {
//   const fullname = [item.name];
//   return fullname;
// }
// console.log(superHeroes.map(getFullnames2));
