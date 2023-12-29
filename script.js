let itemsContainerElement = document.querySelector(".container");

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
      <div class="product-image">
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
        <label for="large">Medium</label>

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
        <div class="color-box yellow"></div>
        <div class="color-box green"></div>
        <div class="color-box lightpink"></div>
        <div class="color-box lightblue"></div>
      </div>
      <div class="line"></div>
      <div class="button-container">
        <div class="counter-container">
          <div id="decrement" class="circle-button" onclick="decrement()">-</div>
          <div id="counter">0</div>
          <div id="increment" class="circle-button" onclick="increment()">+</div>
      </div>
        <button class="add-to-cart-btn" onclick="addToCart('${product.title}')">
          <span class="cart-icon">🛒</span> Add To Cart
      </button>
      </div>
      <div class="line"></div>
      <div id="cartMessage">Click Add To Cart</div>
      <div class="line"></div>
      <div class="product-description">
        <p>${product.description}</p>
      </div>
    </div>`;
    });
};
// Call the function to fetch data
productData();

function addToCart(productName) {
  const cartMessageDiv = document.getElementById("cartMessage");
  cartMessageDiv.textContent = `You choosed ${productName}!`;
  console.log(productName);
}

let counterValue = 0;
const counterElement = document.getElementById("counter");

function updateCounter() {
  counterElement.textContent = counterValue;
}
function decrement() {
  counterValue--;
  updateCounter();
}

function increment() {
  counterValue++;
  updateCounter();
}
