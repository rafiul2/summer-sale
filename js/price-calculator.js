function priceCalculator(id) {
  console.log(id)
  const itemPrice = getPrice(id);
  const totalPrice = getPrice('total-price');
  const total = getPrice('total');
  const currentTotalPrice = (totalPrice + itemPrice).toFixed(2);
  if (currentTotalPrice >= 200) {
    const btn = buttonApply();
  };
  setPrice('total-price', currentTotalPrice);
  setPrice('total', currentTotalPrice);
};

// get discount

// get element price
function getPrice(priceId) {
  const priceElement = document.getElementById(priceId);
  const priceStringValue = priceElement.innerText;
  const price = parseFloat(priceStringValue);
  return price; 
};

// get total price
// function totalPrice(id, itemPrice){
//   const totalValue = getPrice(id);
//   const totalPrice = totalValue + itemPrice;
//   console.log(totalPrice);
//   return totalPrice;
// };

// set total price
function setPrice(elementId, newPrice){
  const elementPrice = document.getElementById(elementId);
  elementPrice.innerText = newPrice;
};

// button apply
 function buttonApply() {
  const btnApply = document.getElementById('btn-apply');
  btnApply.disabled = false;
  return true;
};
// get input value
function getInputValue() {
  
  const inputValueElement = document.getElementById('input-coupon');
  const inputValue = inputValueElement.value;
  const totalPrice = getPrice('total-price');
  let discountPrice = getPrice('discount-price');
  let total = getPrice('total');
  if(inputValue ==='SELL200'){
    discountPrice = (totalPrice * 0.2).toFixed(2);
    const currentTotal =(totalPrice - discountPrice).toFixed(2);
    setPrice('discount-price', discountPrice);
    setPrice('total', currentTotal);
  }
  else{
    alert('input correct coupon code');
  }
  inputValueElement.value = '';
};



