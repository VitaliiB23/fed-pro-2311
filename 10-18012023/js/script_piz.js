let price = document.querySelector(".price");
let fourCheese = document.querySelector("#fourCheese");
let pizzaSelect = document.querySelector(".pizzaSelect");
let sizeSelect = document.querySelector(".sizeSelect");
let mashrooms = document.querySelector("#mashrooms");
let btn = document.querySelector(".buy");

price.innerHTML = 0;

pizzaSelect.addEventListener("change", function (e) {
  if (e.target.value == 0) {
    price.innerHTML = 0;
    btn.disabled = !pizzaSelect.checked;
  }
});

sizeSelect.addEventListener("change", function (e) {
  if (
    e.target.value == 0 ||
    pizzaSelect.value == 1 ||
    pizzaSelect.value == 2 ||
    pizzaSelect.value == 3
  ) {
    price.innerHTML = 0;
    btn.disabled = !sizeSelect.checked;
  }
});

pizzaSelect.addEventListener("change", function (e) {
  if (e.target.value == 1 && sizeSelect.value == 1) {
    price.innerHTML = 220;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 1 && pizzaSelect.value == 1) {
    price.innerHTML = 220;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 2 && pizzaSelect.value == 1) {
    price.innerHTML = 240;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 3 && pizzaSelect.value == 1) {
    price.innerHTML = 260;
    btn.disabled = sizeSelect.checked;
  }
});

sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 1 && pizzaSelect.value == 2) {
    price.innerHTML = 280;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 2 && pizzaSelect.value == 2) {
    price.innerHTML = 300;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 3 && pizzaSelect.value == 2) {
    price.innerHTML = 320;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 1 && pizzaSelect.value == 3) {
    price.innerHTML = 300;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 2 && pizzaSelect.value == 3) {
    price.innerHTML = 320;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 3 && pizzaSelect.value == 3) {
    price.innerHTML = 340;
    btn.disabled = sizeSelect.checked;
  }
});

mashrooms.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML + 50;
  } else {
    price.innerHTML = +price.innerHTML - 50;
  }
});
let cheese = document.querySelector("#cheese");
cheese.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML + 70;
  } else {
    price.innerHTML = +price.innerHTML - 70;
  }
});
let sausage = document.querySelector("#sausage");
sausage.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML + 50;
  } else {
    price.innerHTML = +price.innerHTML - 50;
  }
});
let delivery = document.querySelector("#delivery");
let self = document.querySelector("#self");
delivery.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML + 90;
  }
});
self.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML - 90;
  }
});

const elemModal = document.querySelector("#modal");
const modal = new bootstrap.Modal(elemModal);

btn.addEventListener("click", function () {
  setTimeout(() => {
    modal.hide();
    console.log(elemModal.getAttribute("data-keyboard"));
  }, 5000);
});