function ChangeColor(selector){
  const button = document.querySelector(selector)
    if(button.classList.contains('ON') === false){
      inspectA();
      button.classList.add('ON')
    }else {
      button.classList.remove('ON')
    }
}
function inspectA(){
  const button = document.querySelector('.ON')
  if(button){
    button.classList.remove('ON')
  }
}

let productHTML = '';
productStore.forEach(productStore => {

  productHTML += `
      <div class="card ">
        <div class="image-product">
          <img src="${productStore.image}" alt="">
        </div>
        <div class="name-product">
          <p>${productStore.nameProduct}</p>
        </div>
        <div class="price-product">
          <p>$ ${productStore.priceProduct} USD</p>
        </div>
      </div>
  `
});
document.querySelector('.grid-product-four').innerHTML = productHTML;
document.querySelector('.grid-product-four-hidden').innerHTML = productHTML;

const AllProduct = document.querySelector('.grid-product-four-hidden')
const buttonHide = document.querySelector('.button-four');
buttonHide.addEventListener('click', () => {

  if(AllProduct.classList.contains('OFF') === false){
    inspect();
    AllProduct.classList.add('OFF')
  }else {
    AllProduct.classList.remove('OFF')
  }
})

function inspect(){
  const buttonFour = document.querySelector('.OFF')
  if(buttonFour){
    buttonFour.classList.remove('OFF')
  }
}


function inspectB(){
  const buttonHide = document.querySelector('.OFFB')
  if(buttonHide){
    buttonHide.classList.remove('OFFB')
  }
}

buttonHide.addEventListener('click', () => {
  if(buttonHide.classList.contains('OFFB') === false){
    inspectB();
    buttonHide.classList.add('OFFB')
    buttonHide.innerHTML = 'HIDE PRODUCTS'
  }else {
    buttonHide.classList.remove('OFFB')
    buttonHide.innerHTML = 'VIEV ALL PRODUCTS'
  }
})



const notification = document.querySelector('.notification');
const inputF = document.getElementById('input-email');
const inputB = document.querySelector('.input-button');

inputF.addEventListener('input', () => {
  if (inputF.value.trim() !== '') {
    inputB.disabled = false;
    inputB.classList.add('enabled');
  } else {
    inputB.disabled = true;
    inputB.classList.remove('enabled');
  }
});

inputB.addEventListener('click', ()=>{
  if(inputF.value !== ''){
    setTimeout(()=>{
      notification.classList.remove('dontSee')
      notification.classList.add('See')
      setTimeout(()=>{
        notification.classList.remove('See')
        notification.classList.add('dontSee')
      },2500)

    },500)
    inputF.value = '';
    inputB.disabled = true;
    inputB.classList.remove('enabled');
  }

});