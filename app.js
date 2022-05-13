// NAVIGATION BAR
let burgerBtn = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");

burgerBtn.addEventListener("click", function(){
    burgerBtn.classList.toggle("active");
    navLinks.classList.toggle("active");  
});

// DESKTOP IMAGES SLIDE SHOW
let mainImage = document.querySelector(".main-image img");
let one= document.querySelector(".one");
let two= document.querySelector(".two");
let three= document.querySelector(".three");
let four= document.querySelector(".four img");

one.addEventListener("click", ()=>{
    mainImage.setAttribute("src","images/image-product-1.jpg");
})
two.addEventListener("click", ()=>{
    mainImage.setAttribute("src","images/image-product-2.jpg");
})

three.addEventListener("click", ()=>{
    mainImage.setAttribute("src","images/image-product-3.jpg");
})
four.addEventListener("click", function(){
    mainImage.setAttribute("src","images/image-product-4.jpg");
    console.group("clicked");
})
// PRODUCT COUNTER(this either add to or decrease the items in a cart)

let minusEl = document.querySelector("#minus");
let plusEl = document.querySelector("#plus");
let counterEl = document.querySelector("#order-counter");
let count = 1;
counterEl.textContent=count;

minusEl.addEventListener("click", function(){
    if(count !== 1){
        count--;
    counterEl.textContent=count;
    }
})
plusEl.addEventListener("click", function(){
    
    count++;
    counterEl.textContent=count;
})

// ADD TO CART,  increase the value on the cart image
let addCart = document.querySelector(".add-cart");
let cartValue = document.querySelector(".cart-index");
let cartListChildren= document.querySelector(".list").children;


addCart.addEventListener("click", function(){
        cartValue.classList.add("active"); 
        cartValue.textContent=cartListChildren.length +1;
        
        if(cartListChildren.length >= 0){
            checkOutBtn.classList.add("show");
            emptyCart.classList.add("hide");
        }
        
    creatList();

})

// CART DROPDOWN
let cart = document.querySelector(".cart");
let dropDown = document.querySelector("#myDropdown");
let checkOut = document.querySelector(".checkout");
let emptyCart= document.querySelector(".empty-cart");
// let cartItems = document.querySelector(".cart-items");
// emptyCart.classList.add("empty-cart");
// emptyCart.textContent = "Cart is empty";


cart.addEventListener("click", ()=>{
    
    dropDown.classList.toggle("show");
    
}) 

let checkOutBtn = document.querySelector(".checkout");
console.log(checkOutBtn)

// THIS IS THE UL DECLEARATION
let cartList = document.querySelector(".list");
// checkOutBtn.classList.add("show");



function creatList(){
    // CREATE AND APPEND ELEMENTS TO THE CART 
    
    let li = document.createElement("li");
    let cartImage = document.createElement("div");
    cartImage.classList.add("cart-image");
    let cartText = document.createElement("div");
    let cartdelete = document.createElement("img");
    cartdelete.classList.add("cart-delete");
    cartdelete.setAttribute("src","images/icon-delete.svg")
    let cartTextPar = document.createElement("p");
    let cartTextSpanPrice = document.createElement("span");
    cartTextSpanPrice.classList.add("cart-span-price");
    let cartTextSpanTotal = document.createElement("span");
    cartTextSpanTotal.classList.add("cart-span-total");

    // APPEND ALL CREATED DOCUMENTS TO THE DOM
    // SET CONTENT OF THE CART
    cartList.appendChild(li)
    li.appendChild(cartImage);
    li.appendChild(cartText);
    li.appendChild(cartdelete);
    cartText.appendChild(cartTextPar);
    cartText.appendChild(cartTextSpanPrice);
    cartText.appendChild(cartTextSpanTotal);
    
    // SET INNERHTML of the cart image to innerhtml of main-image;
    let mainImageContainer = document.querySelector(".main-image").innerHTML;
    cartImage.innerHTML = mainImageContainer;
    console.log(mainImageContainer);

    // SET INNER HTML OF "P" CART TEXT TO INNERHTML OF .ITEMS H3
    let itemsHeader = document.querySelector(".items h1").innerHTML;
    cartTextPar.innerHTML = itemsHeader;

    // CALCULATE the value of the item price and no of items
    let price = document.querySelector(".items .price").textContent.slice(2,10);
    console.log(parseInt(price) * parseInt(counterEl.textContent));
    let countStr = count;
    cartTextSpanPrice.innerHTML =`$${price} X ${countStr}`;
    cartTextSpanTotal.textContent = "$"+parseInt(price) * parseInt(countStr);
    counterEl.textContent=1;
    count = 1
}

    // DELETE CART ITEMS WHEN THE DELETE IMAGE IS CLICKED

cartList.addEventListener("click",function(e){
    
    if(e.target.className == "cart-delete"){
    let lightBub;   
    lightBub = e.target.parentElement;
    lightBub.parentElement.removeChild(lightBub);    
        cartValue.textContent=cartListChildren.length;
        if(cartListChildren.length ==0){
            cartValue.classList.remove("active");
            cartIndex=0;
            checkOutBtn.classList.remove("show");
            emptyCart.classList.remove("hide");
        }
    }    
})

// MOBILE IMAGE SLIDER
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const images=document.querySelector(".mobile-images").children;
const totalImages =images.length;
let index = 0;

prev.addEventListener("click",()=>{
    nextImage("next");
})
next.addEventListener("click",()=>{
    nextImage("prev");
})

function nextImage(direction){
    if(direction == "next"){
        index++;
        if(index == totalImages){
            index = 0;
        }
    }else{
        if(index == 0){
            index = totalImages - 1;
        }
        else{
            index--;
        }
    }
      
    for(let i=0; i<images.length; i++){
        images[i].classList.remove("main");
    }
    images[index].classList.add("main");
}

let container = document.querySelector(".main-content");
container.addEventListener("click", function(){
    if(dropDown.className=="dropdown-content show"){

        dropDown.classList.remove("show");
    }
    console.log("clicked");
})
console.log("liked");