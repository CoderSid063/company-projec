const productData = () => {
  fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // You can do further processing with the data here
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
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
