const btn = document.querySelector(".btn");
const myForm = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const delButton = document.querySelector(".btn:hover");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  let myObj = {
    name: name,
    desc: desc,
    price: price,
    quantity: quantity,
  };

  const parentEle = document.getElementById("lisOfItems");
  const childEle = document.createElement("li");
  const buyOneEle = document.createElement("input");
  const buyTwoEle = document.createElement("input");
  const buyThreeEle = document.createElement("input");

  childEle.className = "li";
  buyOneEle.type = "button";
  buyOneEle.value = "Buy 1";
  buyTwoEle.type = "button";
  buyTwoEle.value = "Buy 2";
  buyThreeEle.type = "button";
  buyThreeEle.value = "Buy 3";
  buyOneEle.className = "btn";

  axios
    .post(
      "https://crudcrud.com/api/721611ced1b7418dac7825ac78381be5/CandyData",
      myObj
    )
    .then((res) => {
      showCandyDetails(res);
    })
    .catch((err) => console.log(err));
}

function showCandyDetails(candy) {
  const parentEle = document.getElementById("lisOfItems");
  const childEle = document.createElement("li");
  const buyOneEle = document.createElement("input");
  const buyTwoEle = document.createElement("input");
  const buyThreeEle = document.createElement("input");

  childEle.className = "li";
  buyOneEle.type = "button";
  buyOneEle.value = "Buy 1";
  buyTwoEle.type = "button";
  buyTwoEle.value = "Buy 2";
  buyThreeEle.type = "button";
  buyThreeEle.value = "Buy 3";
  buyOneEle.className = "btn-outline-dark";
  buyTwoEle.className = "btn-outline-dark";
  buyThreeEle.className = "btn-outline-dark";

  childEle.textContent =
    candy.data.name +
    "   ---   " +
    candy.data.desc +
    "   ---   " +
    candy.data.price +
    "   ---   " +
    candy.data.quantity +
    "   ---   ";

  parentEle.appendChild(childEle);
  childEle.appendChild(buyOneEle);
  childEle.appendChild(buyTwoEle);
  childEle.appendChild(buyThreeEle);
}

function showCandyOnLoad(candy) {
  const parentEle = document.getElementById("lisOfItems");
  const childEle = document.createElement("li");
  const buyOneEle = document.createElement("input");
  const buyTwoEle = document.createElement("input");
  const buyThreeEle = document.createElement("input");

  childEle.className = "li";
  buyOneEle.type = "button";
  buyOneEle.value = "Buy 1";
  buyTwoEle.type = "button";
  buyTwoEle.value = "Buy 2";
  buyThreeEle.type = "button";
  buyThreeEle.value = "Buy 3";
  buyOneEle.className = "btn-outline-dark";
  buyTwoEle.className = "btn-outline-dark";
  buyThreeEle.className = "btn-outline-dark";

  childEle.textContent =
    candy.name +
    "   ---   " +
    candy.desc +
    "   ---   " +
    candy.price +
    "   ---   " +
    candy.quantity +
    "   ---   ";

  parentEle.appendChild(childEle);
  childEle.appendChild(buyOneEle);
  childEle.appendChild(buyTwoEle);
  childEle.appendChild(buyThreeEle);

  buyOneEle.onclick = () => {
    newQuat = candy.quantity - 1;
    var temp = {
      name: candy.name,
      desc: candy.desc,
      price: candy.price,
      quantity: `${newQuat}`,
    };
    axios.put(
      `https://crudcrud.com/api/721611ced1b7418dac7825ac78381be5/CandyData/${candy._id}`,
      temp
    );
  };

  buyTwoEle.onclick = () => {
    newQuat = candy.quantity - 1;
    var temp = {
      name: candy.name,
      desc: candy.desc,
      price: candy.price,
      quantity: `${newQuat}`,
    };
    axios.put(
      `https://crudcrud.com/api/721611ced1b7418dac7825ac78381be5/CandyData/${candy._id}`,
      temp
    );
  };

  buyThreeEle.onclick = () => {
    newQuat = candy.quantity - 1;
    var temp = {
      name: candy.name,
      desc: candy.desc,
      price: candy.price,
      quantity: `${newQuat}`,
    };
    axios.put(
      `https://crudcrud.com/api/721611ced1b7418dac7825ac78381be5/CandyData/${candy._id}`,
      temp
    );
  };
}

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  axios
    .get("https://crudcrud.com/api/721611ced1b7418dac7825ac78381be5/CandyData")
    .then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        showCandyOnLoad(res.data[i]);
      }
    })
    .catch((res) => {
      console.log(res);
    });
});