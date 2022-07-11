products = document.querySelectorAll(".product");
totalSum = document.querySelector(".total__amount");
totalSum.textContent = 0;
let field = document.querySelectorAll(".container");
let elems = document.querySelector('input[type="number"]');

function totalCounting() {
  orderSum = 0;
  for (const product of products) {
    checkboxElem = product.querySelector('input[type="checkbox"]');
    amountElem = product.querySelector('input[type="number"]');
    if (checkboxElem.checked) {
      if (amountElem.value <= 0 || amountElem.value > 100) {
        amountElem.value = 1;
      }
      orderSum +=
        parseInt(checkboxElem.dataset.price) * parseInt(amountElem.value);
    } else {
      amountElem.value = 0;
    }
    totalSum.textContent = orderSum;
  }
}

function orderConfirmation() {
  clientName = document.querySelector(".name").value;
  clientSurname = document.querySelector(".surname").value;
  orderList = [];
  for (const product of products) {
    checkboxElem = product.querySelector('input[type="checkbox"]');
    amountElem = product.querySelector('input[type="number"]');
    if (checkboxElem.checked) {
      productName = checkboxElem.dataset.name;
      position = `${productName} - ${amountElem.value} шт.`;
      orderList.push(position);
    }
  }
  if (clientName == "" && clientSurname == "") {
    orderer = "";
  } else {
    orderer = `Заказчик: ${clientName} ${clientSurname}\n\n`;
  }

  if (orderList == false) {
    alert("Ничего не выбрано!");
  } else {
    alert(
      `${orderer}Ваш заказ:\n${orderList.join("\n")}\n\nИтого: ${
        totalSum.textContent
      } руб.`
    );
  }
}

field.addEventListener("click", function () {
  let sum = 0;
  for (let i = 0; i < product.querySelector('input[type="number"]').length; i++)
    if (elems[i].checked)
      sum += elems_cnt[i].value * elems_cnt[i].dataset.price;
  res.innerHTML = `Итого: ${sum} р.`;
});
