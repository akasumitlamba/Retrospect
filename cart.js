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

    // Navigation function
    window.goToProduct = function(productId) {
        window.location.href = `product.html?id=${productId}`;
    };

    // Initialize
    loadCart();
    updateCartCount();
    updateWishlistCount();

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
                <img src="${item.image}" alt="${item.name}" onclick="goToProduct(${item.id})" style="cursor: pointer;" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <div class="item-specs">
                    ${item.size ? `<div class="spec-item"><span class="spec-label">Size:</span> <span class="spec-value">${item.size}</span></div>` : ''}
                    ${item.color ? `<div class="spec-item"><span class="spec-label">Color:</span> <span class="spec-value">${item.color}</span></div>` : ''}
                    ${item.material ? `<div class="spec-item"><span class="spec-label">Material:</span> <span class="spec-value">${item.material}</span></div>` : ''}
                    ${item.category ? `<div class="spec-item"><span class="spec-label">Category:</span> <span class="spec-value">${item.category}</span></div>` : ''}
                </div>
                <div class="item-pricing">
                    <p class="item-price">$${item.price.toFixed(2)}</p>
                    ${item.originalPrice > item.price ? 
                        `<p class="item-savings">You save: $${(item.originalPrice - item.price).toFixed(2)}</p>` : ''}
                </div>
            </div>
            <div class="item-quantity">
                <label>Quantity:</label>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="window.updateQuantity(${index}, -1)">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="window.updateQuantity(${index}, 1)">+</button>
                </div>
                <small class="qty-limit">Max: 10</small>
            </div>
            <div class="item-total">
                <p class="total-label">Total:</p>
                <p class="total-amount">$${(item.price * item.quantity).toFixed(2)}</p>
                ${item.quantity > 1 ? 
                    `<small class="unit-price">$${item.price.toFixed(2)} each</small>` : ''}
            </div>
            <div class="item-actions">
                <button class="action-btn wishlist-btn" onclick="moveToWishlist(${index})" title="Move to Wishlist">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="action-btn remove-btn" onclick="removeItem(${index})" title="Remove Item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        return cartItem;
    }

    function updateSummary() {
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        let shipping = subtotal >= 100 ? 0 : 10;
        const tax = subtotal * 0.08; // 8% tax
        
        // Handle promo code discounts
        let discountAmount = 0;
        if (promoCode && promoCodes[promoCode]) {
            const promo = promoCodes[promoCode];
            
            if (promo.type === 'shipping') {
                shipping = 0; // Free shipping
                discountAmount = 0; // No additional discount
            } else if (promo.type === 'percentage') {
                discountAmount = (subtotal * promo.value) / 100;
            } else if (promo.type === 'fixed') {
                discountAmount = promo.value;
            }
        }
        
        const total = subtotal + shipping + tax - discountAmount;

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        shippingElement.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        
        // Add discount line if promo code is applied
        if (discountAmount > 0) {
            const discountElement = document.querySelector('.summary-discount') || createDiscountElement();
            discountElement.textContent = `-$${discountAmount.toFixed(2)}`;
            discountElement.style.display = 'flex';
        } else if (promoCode && promoCodes[promoCode] && promoCodes[promoCode].type === 'shipping') {
            // Show free shipping discount
            const discountElement = document.querySelector('.summary-discount') || createDiscountElement();
            discountElement.textContent = 'Free Shipping Applied';
            discountElement.style.display = 'flex';
        }
        
        totalElement.textContent = `$${Math.max(0, total).toFixed(2)}`;

        // Update checkout button state
        checkoutBtn.disabled = cart.length === 0;
    }

    function createDiscountElement() {
        const discountElement = document.createElement('div');
        discountElement.className = 'summary-item summary-discount';
        discountElement.style.display = 'none';
        discountElement.innerHTML = '<span>Discount</span><span></span>';
        
        // Insert before total
        const totalElement = document.querySelector('.summary-item.total');
        totalElement.parentNode.insertBefore(discountElement, totalElement);
        
        return discountElement.querySelector('span:last-child');
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

    window.moveToWishlist = function(index) {
        const item = cart[index];
        if (!item) return;

        // Add to wishlist
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existingWishlistItem = wishlist.find(wishlistItem => wishlistItem.id === item.id);
        
        if (!existingWishlistItem) {
            wishlist.push({
                id: item.id,
                name: item.name,
                price: item.price,
                originalPrice: item.originalPrice,
                image: item.image,
                category: item.category,
                rating: item.rating,
                reviews: item.reviews
            });
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }

        // Remove from cart
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        if (cart.length === 0) {
            showEmptyCart();
        } else {
            renderCartItems();
            updateSummary();
        }
        
        updateCartCount();
        updateWishlistCount();
        showNotification(`${item.name} moved to wishlist!`);
    };

    // Promo code functionality
    const promoCodes = {
        'SAVE10': { type: 'percentage', value: 10, description: '10% off your order' },
        'SAVE20': { type: 'percentage', value: 20, description: '20% off your order' },
        'SAVE15': { type: 'percentage', value: 15, description: '15% off your order' },
        'FREESHIP': { type: 'shipping', value: 10, description: 'Free shipping on your order' },
        'WELCOME10': { type: 'fixed', value: 10, description: '$10 off your order' },
        'FIRST25': { type: 'fixed', value: 25, description: '$25 off your order' },
        'VIP50': { type: 'percentage', value: 50, description: '50% off your order' },
        'FLASH30': { type: 'percentage', value: 30, description: '30% off your order' }
    };

    applyPromoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        
        if (promoCodes[code]) {
            const promo = promoCodes[code];
            promoCode = code;
            
            // Calculate discount based on type
            if (promo.type === 'percentage') {
                const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                promoDiscount = (subtotal * promo.value) / 100;
            } else if (promo.type === 'fixed') {
                promoDiscount = promo.value;
            } else if (promo.type === 'shipping') {
                promoDiscount = 10; // Free shipping value
            }
            
            showNotification(`Promo code applied! ${promo.description}`);
            updateSummary();
            applyPromoBtn.disabled = true;
            promoInput.disabled = true;
            
            // Add visual feedback
            promoInput.style.borderColor = '#28a745';
            promoInput.style.backgroundColor = '#f8fff9';
        } else {
            showNotification('Invalid promo code. Try: SAVE10, SAVE20, FREESHIP, WELCOME10, FIRST25, VIP50, or FLASH30');
            promoInput.style.borderColor = '#dc3545';
            promoInput.style.backgroundColor = '#fff5f5';
            
            // Reset styling after 2 seconds
            setTimeout(() => {
                promoInput.style.borderColor = '';
                promoInput.style.backgroundColor = '';
            }, 2000);
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

    function updateWishlistCount() {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const count = wishlist.length;
        const wishlistCountElements = document.querySelectorAll('#wishlist-count');
        wishlistCountElements.forEach(element => {
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
