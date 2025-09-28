// Wishlist page functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const wishlistItems = document.getElementById('wishlist-items');
    const emptyWishlist = document.getElementById('empty-wishlist');

    let wishlist = [];

    // Initialize
    loadWishlist();
    updateWishlistCount();
    updateCartCount();

    function loadWishlist() {
        wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        if (wishlist.length === 0) {
            showEmptyWishlist();
        } else {
            hideEmptyWishlist();
            renderWishlistItems();
        }
    }

    function showEmptyWishlist() {
        emptyWishlist.style.display = 'block';
        document.querySelector('.wishlist-content').style.display = 'none';
    }

    function hideEmptyWishlist() {
        emptyWishlist.style.display = 'none';
        document.querySelector('.wishlist-content').style.display = 'block';
    }

    function renderWishlistItems() {
        wishlistItems.innerHTML = '';
        
        wishlist.forEach((item, index) => {
            const wishlistItem = createWishlistItemElement(item, index);
            wishlistItems.appendChild(wishlistItem);
        });
    }

    function createWishlistItemElement(item, index) {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        
        wishlistItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p class="item-category">${item.category}</p>
                <div class="item-rating">
                    <div class="stars">
                        ${generateStars(item.rating)}
                    </div>
                    <span>(${item.reviews})</span>
                </div>
                <p class="item-price">$${item.price.toFixed(2)}</p>
                ${item.originalPrice > item.price ? 
                    `<p class="item-original-price">$${item.originalPrice.toFixed(2)}</p>` : ''}
            </div>
            <div class="item-actions">
                <button class="btn btn-primary" onclick="addToCartFromWishlist(${index})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="btn btn-secondary" onclick="viewProductFromWishlist(${item.id})">
                    <i class="fas fa-eye"></i> View Details
                </button>
                <button class="btn btn-danger" onclick="removeFromWishlist(${index})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `;

        return wishlistItem;
    }

    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= rating) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    // Global functions for wishlist operations
    window.addToCartFromWishlist = function(index) {
        const item = wishlist[index];
        if (!item) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Item added to cart!');
    };

    window.viewProductFromWishlist = function(productId) {
        localStorage.setItem('currentProduct', productId);
        window.location.href = 'product.html';
    };

    window.removeFromWishlist = function(index) {
        const item = wishlist[index];
        wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        if (wishlist.length === 0) {
            showEmptyWishlist();
        } else {
            renderWishlistItems();
        }
        
        updateWishlistCount();
        showNotification(`${item.name} removed from wishlist`);
    };

    function updateWishlistCount() {
        const count = wishlist.length;
        const wishlistCountElements = document.querySelectorAll('#wishlist-count');
        wishlistCountElements.forEach(element => {
            element.textContent = count;
        });
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
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
