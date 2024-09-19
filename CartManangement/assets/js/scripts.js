let addedDataJSON = []; // Global array to hold product data
let cart = []; // Global array to hold cart items

// Fetch products from the JSON server
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/addedDataJSON');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        addedDataJSON = [...data]; // Spread operator to push data into global array
        populateProducts(addedDataJSON); // Populate products on the DOM
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
}

// Populate fetched products on the DOM
function populateProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
            <p>Date: ${product.date}</p>
            <p>Location: ${product.location}</p>
            <p>Company: ${product.company}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Add product to the cart
function addToCart(productId) {
    const product = addedDataJSON.find(prod => prod.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1; // Increase quantity if already in cart
        } else {
            cart.push({ ...product, quantity: 1 }); // Add to cart with initial quantity
        }
        updateCartUI(); // Update the cart UI
    }
}

// Remove product from cart
function deleteProductFromCart(productId) {
    cart = cart.filter(item => item.id !== productId); // Remove product from cart
    updateCartUI(); // Update the cart UI
}

// Increase product quantity
function increaseProductQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1; // Increase quantity
        updateCartUI(); // Update the cart UI
    }
}

// Decrease product quantity
function reduceProductQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1; // Decrease quantity
        } else {
            deleteProductFromCart(productId); // Remove product if quantity is 1
        }
        updateCartUI(); // Update the cart UI
    }
}

// Edit product quantity in cart
function editProductInCart(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity; // Set new quantity
        if (newQuantity <= 0) {
            deleteProductFromCart(productId); // Remove product if quantity <= 0
        }
        updateCartUI(); // Update the cart UI
    }
}

// Update cart UI
function updateCartUI() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear previous content

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const quantity = document.createElement('p');
        quantity.textContent = `Quantity: ${item.quantity}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => deleteProductFromCart(item.id);

        const increaseButton = document.createElement('button');
        increaseButton.textContent = 'Increase';
        increaseButton.onclick = () => increaseProductQuantity(item.id);

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = 'Decrease';
        decreaseButton.onclick = () => reduceProductQuantity(item.id);

        cartItemDiv.append(title, quantity, removeButton, increaseButton, decreaseButton);
        cartContainer.appendChild(cartItemDiv);
    });
}

// On DOMContentLoaded, fetch products
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts(); // Initial fetch call to load products
});
