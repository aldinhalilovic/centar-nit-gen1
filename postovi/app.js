let postsDiv = document.getElementById("posts");
let dataButton = document.getElementById("buttonId");

let getData = async () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((el) => el.json())
  //     .then((res) => {
  //       let skraceniPostovi = res.slice(0, 20);
  //       for (let post in skraceniPostovi) {
  //         const newParagraph = document.createElement("p");
  //         newParagraph.innerText = skraceniPostovi[post].title;

  //         postsDiv.appendChild(newParagraph);
  //       }
  //     });
  let apiCall = await fetch("https://jsonplaceholder.typicode.com/posts");
  let dataJson = await apiCall.json();
  console.log(dataJson);
  dataJson.slice(0, 20).map((el) => {
    console.log(el);
    const newParagraph = document.createElement("p");
    newParagraph.innerText = el.title;

    postsDiv.appendChild(newParagraph);
  });
};

dataButton.addEventListener("click", () => getData());
