const input = document.getElementById("input");
const lista = document.getElementById("list");
console.log(input);
console.log(lista);

const newElement = (text) => {
  const newItem = document.createElement("li");
  newItem.classList = "item";
  newItem.innerText = text;
  lista.appendChild(newItem);

  const deleteButtn = document.createElement("button");
  deleteButtn.classList = "x";
  deleteButtn.innerText = "x";
  newItem.appendChild(deleteButtn);
};

input.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = e.target.first.value;
  newElement(taskText);
  e.target.first.value = "";
});

lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("x")) {
    const li = e.target.parentElement;
    lista.removeChild(li);
  }
});
