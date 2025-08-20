// Cart page functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const promoInput = document.getElementById('promo-input');
    const applyPromoBtn = document.getElementById('apply-promo');

    let cart = [];
    let promoCode = null;
    let promoDiscount = 0;

    // Initialize
    loadCart();
    updateCartCount();

    function loadCart() {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        if (cart.length === 0) {
            showEmptyCart();
        } else {
            hideEmptyCart();
            renderCartItems();
            updateSummary();
        }
    }

    function showEmptyCart() {
        emptyCart.style.display = 'block';
        document.querySelector('.cart-content').style.display = 'none';
    }

    function hideEmptyCart() {
        emptyCart.style.display = 'none';
        document.querySelector('.cart-content').style.display = 'block';
    }

    function renderCartItems() {
        cartItems.innerHTML = '';
        
        cart.forEach((item, index) => {
            const cartItem = createCartItemElement(item, index);
            cartItems.appendChild(cartItem);
        });
    }

    function createCartItemElement(item, index) {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                ${item.color ? `<p>Color: ${item.color}</p>` : ''}
                <p class="item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="item-quantity">
                <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div class="item-total">
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="item-actions">
                <button class="remove-btn" onclick="removeItem(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        return cartItem;
    }

    function updateSummary() {
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = subtotal >= 100 ? 0 : 10;
        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + shipping + tax - promoDiscount;

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        shippingElement.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;

        // Update checkout button state
        checkoutBtn.disabled = cart.length === 0;
    }

    // Global functions for cart operations
    window.updateQuantity = function(index, change) {
        const newQuantity = cart[index].quantity + change;
        
        if (newQuantity > 0 && newQuantity <= 10) {
            cart[index].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
            updateSummary();
            updateCartCount();
        } else if (newQuantity === 0) {
            removeItem(index);
        }
    };

    window.removeItem = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        if (cart.length === 0) {
            showEmptyCart();
        } else {
            renderCartItems();
            updateSummary();
        }
        
        updateCartCount();
    };

    // Promo code functionality
    applyPromoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        
        if (code === 'SAVE10') {
            promoCode = code;
            promoDiscount = 10;
            showNotification('Promo code applied! 10% discount added.');
            updateSummary();
            applyPromoBtn.disabled = true;
            promoInput.disabled = true;
        } else if (code === 'FREESHIP') {
            promoCode = code;
            promoDiscount = 10; // Free shipping value
            showNotification('Promo code applied! Free shipping added.');
            updateSummary();
            applyPromoBtn.disabled = true;
            promoInput.disabled = true;
        } else {
            showNotification('Invalid promo code. Try SAVE10 or FREESHIP.');
        }
    });

    // Checkout functionality
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        
        // For demo purposes, show a success message
        showNotification('Checkout functionality would be implemented here!');
        
        // In a real application, this would redirect to a payment processor
        // or show a checkout form
    });

    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('#cart-count');
        cartCountElements.forEach(element => {
            element.textContent = count;
        });
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
