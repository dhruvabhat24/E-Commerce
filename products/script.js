// JavaScript for handling the popup and cart

const viewButtons = document.querySelectorAll('.view-details');
const popup = document.querySelector('.product-popup');
const closePopupButton = document.querySelector('.close-popup');
const popupProductName = document.getElementById('popup-product-name');
const popupProductDescription = document.getElementById('popup-product-description');
const popupProductPrice = document.getElementById('popup-product-price');
const addToCartPopupButton = document.querySelector('.add-to-cart-popup');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = 'block';
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        popupProductName.textContent = product;
        popupProductDescription.textContent = `Description of ${product}.`;
        popupProductPrice.textContent = `Price: $${price}`;
    });
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.getAttribute('data-product');
    const price = parseFloat(event.target.getAttribute('data-price'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, price });

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} has been added to your cart.`);
}

// Add to Cart in Popup
addToCartPopupButton.addEventListener('click', () => {
    const product = popupProductName.textContent;
    const price = parseFloat(popupProductPrice.textContent.split(': ')[1].replace('$', ''));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, price });

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} has been added to your cart.`);
});
