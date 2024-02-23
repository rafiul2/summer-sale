function priceCalculator(id, item) {
  const itemPrice = getPrice(id);
  const totalPrice = getPrice('total-price');
  const total = getPrice('total');
  const currentTotalPrice = (totalPrice + itemPrice).toFixed(2);
  if (currentTotalPrice >= 200) {
    buttonApply('btn-apply');
  };
  // For button Make Purchase
  buttonApply('make-purchase');
  setPrice('total-price', currentTotalPrice);
  setPrice('total', currentTotalPrice);
  selectedItems(item);
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
 function buttonApply(id) {
  const btnApply = document.getElementById(id);
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
// selected items
function selectedItems(item) {
  const selectedItems = document.getElementById('selected-items');
  const count = selectedItems.childElementCount;
  const p = document.createElement('p');
  p.classList.add('my-3');
  p.innerHTML = `<span class="text-xl">${count + 1} ${item}</>`
  selectedItems.appendChild(p);
};

// Display Congratulations

// function displayCongrats(){
//   console.log('cc')
//   const sectionModal = document.getElementById('section-modal');
//   console.log(sectionModal)
//   sectionModal.style.display = 'block';
// }







