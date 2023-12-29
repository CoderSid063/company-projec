function updateCartMessage() {
  // Get the chosen size
  const sizeElements = document.getElementsByName("size");
  let chosenSize = "";
  for (const sizeElement of sizeElements) {
    if (sizeElement.checked) {
      chosenSize = sizeElement.value;
      console.log(chosenSize);
      break;
    }
  }

  // Get the chosen color
  const colorElements = document.querySelectorAll(".color-box");
  let chosenColor = "";
  for (const colorElement of colorElements) {
    if (colorElement.classList.contains("selected")) {
      // Get the color name from the class list
      chosenColor = colorElement.classList[1];
      break;
    }
  }

  /*const colorBoxes = document.querySelectorAll(".color-box");
  let chosenColor = "";
  colorBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      const chosenColor = box.classList[1]; // Assuming the color name is the second class
      console.log("Selected color:", chosenColor);
    });
  });*/

  // Get the product title
  const productTitle = document.querySelector(".product-name h1").textContent;

  // Update the cart message
  const cartMessageDiv = document.getElementById("cartMessage");
  cartMessageDiv.textContent = `You chose ${productTitle} with ${chosenColor} of size ${chosenSize}!`;
  if (chosenSize && chosenColor) {
    cartMessageDiv.textContent = `You chose ${productTitle} with ${chosenColor} of size ${chosenSize}!`;
  } else {
    cartMessageDiv.textContent =
      "Please choose size and color before adding to cart.";
  }
}

function addToCart(productTitle) {
  updateCartMessage();
  console.log(productTitle);
}

let counterValue = 0;
function updateCounter() {
  const counterElement = document.getElementById("counter");
  counterElement.innerText = counterValue;
}
function decrement() {
  counterValue--;
  updateCounter();
}

function increment() {
  counterValue++;
  updateCounter();
}

//color animation
document.addEventListener("DOMContentLoaded", function () {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      colorBoxes.forEach(function (otherBox) {
        otherBox.classList.remove("clicked");
      });

      box.classList.add("clicked");
    });
  });
});

const itemsContainerElement = document.querySelector(".container");
const productData = () => {
  fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json"
  )
    .then((response) => response.json())
    .then((data) => {
      // You can do further processing with the data here
      const product = data.product;
      console.log(product);
      itemsContainerElement.innerHTML = `<div class="product-container">
      <div class="product-image" style="background-image: url('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732');">
      </div>
       <div class="thumbnail-images">
        <div class="image1 im" style="background-image: url('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-6Y2XstWtDvM-unsplash.jpg?v=1701946731');"></div>
        <div class="image2 im" style="background-image: url('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732');"></div>
        <div class="image3 im" style="background-image: url('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-om8qxMDlGfI-unsplash.jpg?v=1701946732');"></div>
        <div class="image4 im" style="background-image: url('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-WQgvRkmqRrg-unsplash.jpg?v=1701946731');"></div>
    </div>
    </div>
    <div class="summary">
      <div class="product-name">
        <span>${product.vendor}</span>
        <h1>${product.title}</h1>
      </div>
      <div class="line"></div>
      <div class="product-price">
        <div class="original-price">
          <p class="price">${product.price}</p>
          <span id="compare_at_price">${product.compare_at_price}</span>
        </div>
        <div class="price-off">
          35%off
        </div>
      </div>
      <div class="line"></div>
      <div class="size-selector">
        <h6>Choose Size</h6>
        <input type="radio" id="small" name="size" value="small">
        <label for="small">Small</label>

        <input type="radio" id="Medium" name="size" value="Medium">
        <label for="medium">Medium</label>

        <input type="radio" id="large" name="size" value="large">
        <label for="large">Large</label>

        <input type="radio" id="xl" name="size" value="xl">
        <label for="xl">XL</label>

        <input type="radio" id="xxl" name="size" value="xxl">
        <label for="xxl">XXL</label>
      </div>
      <div class="line"></div>
      <div class="color-picker-container">
        <div class="color-title">Choose a color</div>
        <div class="color-box yellow  selected"></div>
        <div class="color-box green selected"></div>
        <div class="color-box lightpink "></div>
        <div class="color-box lightblue "></div>
      </div>
      <div class="line"></div>
      <div class="button-container">
        <div class="counter-container">
          <div id="decrement" class="circle-button" onclick="decrement()">-</div>
          <div id="counter">0</div>
          <div id="increment" class="circle-button" onclick="increment()">+</div>
        </div>
        <button class="add-to-cart-btn" onclick="updateCartMessage()">
          <span class="cart-icon">🛒</span> Add To Cart
        </button>
      </div>
      <div class="line"></div>
      <div id="cartMessage"></div>
      <div class="line"></div>
      <div class="product-description">
        <p>${product.description}</p>
      </div>
    </div>`;
    });
};
// Call the function to fetch data
productData();
