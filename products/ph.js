const productCards = document.querySelectorAll('.product-card');
const productPopup = document.querySelector('.product-popup');
const popupContent = document.querySelector('.popup-content');
const closePopup = document.querySelector('.close-popup');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

productCards.forEach((card, index) => {
    const title = `Phone Model ${index + 1}`;
    const description = `Description of Phone Model ${index + 1}.`;
    const imageUrl = `phone${index + 1}.jpg`;

    card.querySelector('.view-details').addEventListener('click', () => {
        // Fill popup content with product details
        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-description').textContent = description;
        document.getElementById('popup-image').src = imageUrl;

        // Display the popup
        productPopup.style.display = 'block';
    });

    card.querySelector('.add-to-cart').addEventListener('click', () => {
        // Add the product to the cart (you can implement this logic here)
        alert(`Added ${title} to the cart.`);
    });
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    productPopup.style.display = 'none';
});

// Close the popup when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === productPopup) {
        productPopup.style.display = 'none';
    }
});
