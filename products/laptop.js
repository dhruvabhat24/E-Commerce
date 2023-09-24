const productCards = document.querySelectorAll('.product-card');
const productPopup = document.querySelector('.product-popup');
const popupContent = document.querySelector('.popup-content');
const closePopup = document.querySelector('.close-popup');

productCards.forEach((card, index) => {
    card.querySelector('.view-details').addEventListener('click', () => {
        const title = `Laptop Model ${index + 1}`;
        const description = `Description of Laptop Model ${index + 1}.`;
        const imageUrl = `laptop${index + 1}.jpg`;

        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-description').textContent = description;
        document.getElementById('popup-image').src = imageUrl;

        productPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling in the background
    });
});

closePopup.addEventListener('click', () => {
    productPopup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling in the background
});

// Add event listeners for "Add to Cart" and "Buy Now" buttons if needed
