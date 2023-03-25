// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// function numOne() {
//   console.log(1);
// }

// function numTwo() {
//   console.log(2);
//   numOne();
// }

// function numThree() {
//   console.log(5);
//   numTwo();
//   console.log(3);
// }

// function numFive() {
//   console.log("first");
//   numThree();
//   console.log("a");
// }

// numFive();

// function sayMyName(name) {
//   console.log("Moje ime je " + name);
// }

// const nekaFunkcija = () => {
//   const myName = "aldin";
//   sayMyName(myName);
// };

// nekaFunkcija();

// function one() {
//   console.log(1);
// }

// function two() {
//   setTimeout(() => {
//     console.log("aslkdskldisdisudio");
//   }, -2);
// }

// function three() {
//   setTimeout(() => {
//     console.log(3);
//   }, 1);
// }

// function neka() {
//   console.log("imas,dnaskldj");
// }

// console.log(2);
// console.log(2);
// console.log(2);
// two();
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(2);

//////////////////////////////////////////   PROMISI   /////////////////////////////////////////////////////////////////////

// function time() {
//   setTimeout(() => {
//     console.log("nesto");
//   }, 1000);
// }

// function one() {
//   console.log(1);
// }

// function two() {
//   console.log(2);
// }

// one();
// time();
// two();

// const obecanje = new Promise((resolve, reject) => {
//   // resolve(2);
//   // reject("neuspesno");
//   let a = 1 + 2;
//   if (a === 3) {
//     resolve(a);
//   } else {
//     reject("Zbir je netacan");
//   }
// });

// obecanje
//   .then((res) => {
//     let a = 0;
//     for (let i = 0; i < res; i++) {
//       a += 2;
//     }
//     // res + 10;
//     return a;
//   })
//   .then((el) => console.log(el))
//   .catch((el) => console.log(el))
//   .finally(() => console.log("konacan rezultat"));

// const prvi = new Promise((resolve, reject) => {
//   // resolve("prosao prvi");
//   reject("ne prolazi");
// });
// const drugi = new Promise((resolve, reject) => {
//   resolve("prosao drugi");
// });
// const treci = new Promise((resolve, reject) => {
//   resolve("prosao treci");
// });

// Promise.all([prvi, drugi, treci])
//   .then((el) => console.log(el))
//   .catch((el) => console.log(el));

// fetch("httpsppppppppppp://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((el) => (a = el))
//   .then(() => console.log(a))
//   .catch((error) => console.log("Greska " + error));

// const data = getData();
// console.log(data);
// if (data) {
//   console.log(data, "aa");
// }

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();

// function asyncCall() {
//   console.log("calling");
//   const result = resolveAfter2Seconds();
//   console.log(result.then((el) => console.log(el)));
//   // Expected output: "resolved"
// }

// asyncCall();

// try {
//   getData();
//   nekasestafunkcija();
// } catch (error) {
//   console.log("Ovo je error ", error);
// }

// async function getData() {
//   let a = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let response = await a.json();
//   let data = response.slice(0, 20);
//   let evenIds = data.filter((el) => el.id % 2 === 0);
//   let practice = evenIds.map((el) => {
//     return { ...el, id: el.id++ };
//   });
//   console.log(evenIds);
//   console.log(practice);
// }

// getData();

// const BASE_URL = "https://dummyjson.com/products";

// function getData() {
//   fetch(BASE_URL)
//     .then((res) => res.json())
//     .then((el) => (a = el))
//     .then(() => console.log(a.products[0].images))
//     .catch((error) => console.log("Greska " + error));
// }

// console.log(async () => await getData());

const getProducts = async () => {
  const data = await fetch("https://dummyjson.com/products?limit=100").then(
    (res) => res.json()
  );
  console.log(data);
  console.log(data.limit);
  console.log(data.products);
};

getProducts();
