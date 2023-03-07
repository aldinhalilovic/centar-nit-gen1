console.log("nesto");
// console.log(document);
const prikaz = document.getElementById("displayArea");
console.log(prikaz);

const buttoni = document.getElementsByClassName("numbers");
console.log(buttoni);

console.log(buttoni[0]);

const nekaDrugaFunkcija = (value) => {
  if (value === "=") {
    prikaz.innerText = eval(prikaz.innerText);
  } else if (value === "AC") {
    prikaz.innerText = "";
  } else if (value === "+/-") {
    if (prikaz.innerText.startsWith("-")) {
      prikaz.innerText = prikaz.innerText.slice(1);
    } else prikaz.innerText = `-${prikaz.innerText}`;
  } else prikaz.innerText += value;
};

for (let i = 0; i < buttoni.length; i++) {
  buttoni[i].addEventListener("click", (e) => {
    console.log(e.target.textContent);
    let value = e.target.textContent;
    nekaDrugaFunkcija(value);
  });
}

// nesto nije kaok treba
//test drugi po redu
