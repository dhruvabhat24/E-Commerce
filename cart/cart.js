// Sample product data (you can replace this with your own products)
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    // Add more products here
];

// Initialize the cart items and total price
let cartItems = [];
let cartTotalPrice = 0;

// Function to render the product list
function renderProductList() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(product));

        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(addToCartButton);

        productList.appendChild(productItem);
    });
}

// Function to render the cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    cartItems.forEach(cartItem => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        const itemName = document.createElement("span");
        itemName.textContent = cartItem.name;

        const itemPrice = document.createElement("span");
        itemPrice.textContent = `$${cartItem.price.toFixed(2)}`;

        cartItemDiv.appendChild(itemName);
        cartItemDiv.appendChild(itemPrice);

        cartItemsContainer.appendChild(cartItemDiv);
    });
}

// Function to update the cart total price
function updateCartTotal() {
    const cartTotal = document.getElementById("cart-total-price");
    cartTotal.textContent = `$${cartTotalPrice.toFixed(2)}`;
}

// Function to add a product to the cart
function addToCart(product) {
    cartItems.push(product);
    cartTotalPrice += product.price;
    renderCartItems();
    updateCartTotal();
}

// Function to handle checkout button click
function handleCheckout() {
    alert("Thank you for your purchase! Total amount: $" + cartTotalPrice.toFixed(2));
    cartItems = [];
    cartTotalPrice = 0;
    renderCartItems();
    updateCartTotal();
}

// Initialize the page
renderProductList();

// Add event listener for the checkout button
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", handleCheckout);
