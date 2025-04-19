// Array to store cart items
let cart = [];

// DOM Elements
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const cartItems = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to update cart UI
function updateCartUI() {
    // Clear current cart items
    cartItems.innerHTML = '';

    // Add each item to the modal
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartItems.appendChild(div);
        total += item.price;
    });

    // Update total price
    totalPriceElem.textContent = `Total: $${total.toFixed(2)}`;

    // Update cart button
    cartBtn.textContent = `Cart (${cart.length})`;
}

// Function to show the cart modal
function showCartModal() {
    cartModal.style.display = 'flex';
}

// Function to hide the cart modal
function hideCartModal() {
    cartModal.style.display = 'none';
}

// Function to handle adding a product to the cart
function addToCart(event) {
    const productItem = event.target.closest('.product-item');
    const productId = productItem.getAttribute('data-id');
    const productName = productItem.querySelector('h3').textContent;
    const productPrice = parseFloat(productItem.querySelector('p').textContent.replace('$', ''));

    // Add product to cart
    cart.push({ id: productId, name: productName, price: productPrice });

    // Update the UI
    updateCartUI();
}

// Event Listeners
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

cartBtn.addEventListener('click', showCartModal);
closeBtn.addEventListener('click', hideCartModal);
checkoutBtn.addEventListener('click', () => {
    alert('Proceeding to Checkout...');
    hideCartModal();
});
