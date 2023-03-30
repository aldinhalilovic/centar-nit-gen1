// console.log("ima");

// let x;
// console.log(x);

// x = 10;

// console.log(x);
// var x = 10;

// var y;
// y = 10;

// console.log(squareFn(3));

// function squareFn(n) {
//   return n * n;
// }

// console.log(squareConst(4));

// var squareConst = (n) => {
//   return n * n;
// };

// var a;

// let a;

// console.log(a);

// a = 10;

// console.log(a);

// console.log(square(3));

// function square(n) {
//   return n * n;
// }
// console.log(constSquare(3));

// const constSquare = function (n) {
//   return n * n;
// };

// const first = {
//   // name: "key",
//   key: "value",
//   phone: "xaomi",
//   friends: ["joey", "chandler", "ross"],
//   town: "Novi Pazar",
//   anotherObject: {
//     tv: "samsung",
//     laptop: "acer",
//     thisObject() {
//       console.log(this, "manji objekat");
//     },
//   },
//   thisObject() {
//     console.log(this.anotherObject.tv, "clg iz objekta");
//   },
// };

// console.log(first);
// first.thisObject();
// first.anotherObject.thisObject();

// const second = {
//   key: "value",
//   name: "aldin",
//   age: 21,
//   knowledge: {
//     javascript: "good",
//     html: "good",
//     css() {
//       console.log(this.advanced.josJedan);
//     },
//     advanced: {
//       react: "good",
//       typescript: "solid",
//       reactnative: "beginner",
//       josJedan: {
//         paJosJedan: {
//           onda: {
//             poslednji: "nesto",
//           },
//           sayHello() {
//             console.log(this);
//           },
//         },
//       },
//     },
//   },
// };

// console.log(second.knowledge.advanced.josJedan.paJosJedan.onda);
// second.knowledge.css();

// function callFunkcija(arg1, arg2) {
//   console.log(this.age + arg1 + arg2);
// }

// callFunkcija.call(second, "godina", " call");
// callFunkcija.apply(second, ["godina", "    apply"]);
// const bindFunkcija = callFunkcija.bind(second, "godina", "     bind");

// bindFunkcija();

// \
// Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za
// "Mama ima momu", dobija se rezultat 5.

// let string = "Mama ima momu";

// const checkLetter = (someString) => {
//   let numberMs = 0;
//   for (let m in someString) {
//     // console.log(someString[m]);
//     if (someString[m] === "m" || someString[m] === "M") {
//       numberMs += 1;
//     }
//   }
//   return numberMs;
// };

// console.log(checkLetter(string));

// Ispitati da li u unetom stringu ima više malih ili velikih slova. Slova koja se koriste u stringu
// pripadaju isključivo engleskoj abecedi.

// let stringNeki = "Ako JA SAD ovako PISEM koliko CE MALIH slova DA ima";

// const checkCases = (string) => {
//   let malaSlova = 0;
//   let velikaSlova = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== " ") {
//       if (string[i] === string[i].toUpperCase()) {
//         velikaSlova++;
//       } else malaSlova++;
//     }
//   }

//   return `Malih slova ima ${malaSlova}, a velikih ${velikaSlova}`;
// };

// console.log(checkCases(stringNeki));

///////////////////////////////////////////////////////////////////OOP//////////////////////////////////////////////////////////////////////////

// console.log({
//   name: "Aldin",
//   lastName: "Halilovic",
// });

// let classRoom = {
//   numberOfPeople: 6,
//   teacher: "Aldin",
// };

// console.log(classRoom);
// console.log(classRoom.hasOwnProperty("ucenik"));

// const createNewObject = (name, lastName) => {
//   // let newObject = {};
//   // newObject.name = name;
//   // newObject.lastName = lastName;
//   const newObject = {
//     name: name,
//     lastName,
//   };
//   return newObject;
// };

// console.log(createNewObject("ALdin", "Halilovic"));

// let person = createNewObject("aldin", "halilovic");

// console.log(person);
// console.log(`cao ${person.name}`);

// class Animal {
//   name = "Aldin";
//   age = 21;

//   // constructor(ime, godine, owner) {
//   //   this.name = ime;
//   //   this.age = godine;
//   //   this.owner = owner;
//   //   this.lastname = owner;
//   // }

//   writeAges() {
//     return this.age;
//   }

//   nestoTrece(godine) {
//     this.age = godine;
//   }
// }

// const someAnimal = new Animal("aaaa", 30, "Aldin");
// const someAnimal = new Animal();

// console.log(someAnimal);
// someAnimal.writeAges();
// someAnimal.nestoTrece(52);
// someAnimal.writeAges();

// console.log(someAnimal);

// class Dog extends Animal {
//   bark;

//   constructor(arg1) {
//     super();
//     this.bark = arg1;
//   }
// }

// const pas = new Dog("aw aw");
// console.log(pas.writeAges());

// class School {
//   static name = "NIT";
//   static nekaFun() {
//     console.log("staticna vrednost");
//   }

//   constructor(students) {
//     this.students = students;
//   }
// }

// let skola = new School(30);
// console.log(skola);
// console.log(School.name);
// School.nekaFun();

// class Shop {
//   #profit = 30;
//   proizvod = 40;

//   getProfit() {
//     return this.#profit;
//   }
// }

// const prodavnica = new Shop();
// console.log(prodavnica);
// console.log(prodavnica.proizvod);
// console.log(prodavnica.);

// let noviProfit = prodavnica.getProfit();
// console.log(noviProfit);

////////////////////////////////novi cas//////////////////////////////////

// class Car {
//   mark;
//   #speed = 120;

//   constructor(markName) {
//     this.mark = markName;
//   }

//   getSpeed() {
//     return this.#speed;
//   }

//   fastUp() {
//     console.log(this.#speed);
//     this.#speed += 20;
//     console.log(this.#speed);
//   }

//   slowDown() {
//     this.#speed -= 10;
//   }

//   stop() {
//     this.#speed = 0;
//   }
// }

// const mojNoviAuto = new Car("skoda");

// console.log(mojNoviAuto);
// console.log(mojNoviAuto.getSpeed());
// mojNoviAuto.fastUp();
// console.log(mojNoviAuto.getSpeed());
// mojNoviAuto.fastUp();
// console.log(mojNoviAuto.getSpeed());
// mojNoviAuto.fastUp();
// console.log(mojNoviAuto.getSpeed());
// mojNoviAuto.fastUp();
// console.log(mojNoviAuto.getSpeed());
// mojNoviAuto.slowDown();
// mojNoviAuto.slowDown();
// mojNoviAuto.slowDown();
// mojNoviAuto.slowDown();
// console.log(mojNoviAuto.getSpeed());

// mojNoviAuto.fastUp();

// class Bus extends Car {
//   sedista = 50;

//   constructor(markName) {
//     super(markName);
//   }
// }

// const newBus = new Bus("lasta");

// console.log(newBus);
// console.log(newBus.getSpeed());
// newBus.fastUp();
// newBus.fastUp();
// newBus.fastUp();
// newBus.fastUp();
// newBus.fastUp();
// newBus.fastUp();
// newBus.fastUp();
// newBus.slowDown();

// console.log(newBus.getSpeed());
// newBus.stop();
// console.log(newBus.getSpeed());

const getData = () => {
  fetch("https://dummyjson.com/carts/1")
    .then((res) => res.json())
    .then(console.log);
};

getData();
