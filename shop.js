// Shop page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = [
        {
            id: 1,
            name: "Classic Aviator Sunglasses",
            price: 89.99,
            originalPrice: 129.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.8,
            reviews: 127
        },
        
        {
            id: 2,
            name: "Leather Crossbody Bag",
            price: 149.99,
            originalPrice: 199.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.6,
            reviews: 89
        },
        
        {
            id: 3,
            name: "Premium Watch",
            price: 299.99,
            originalPrice: 399.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.9,
            reviews: 203
        },
        {
            id: 4,
            name: "Denim Jacket",
            price: 79.99,
            originalPrice: 99.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.7,
            reviews: 156
        },
        {
            id: 5,
            name: "White Sneakers",
            price: 89.99,
            originalPrice: 119.99,
            category: "shoes",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.5,
            reviews: 78
        },
        {
            id: 6,
            name: "Casual T-Shirt",
            price: 29.99,
            originalPrice: 39.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            rating: 4.4,
            reviews: 92
        },
        {
            id: 7,
            name: "Summer Dress",
            price: 59.99,
            originalPrice: 79.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.6,
            reviews: 145
        },
        {
            id: 8,
            name: "Leather Boots",
            price: 159.99,
            originalPrice: 199.99,
            category: "shoes",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.8,
            reviews: 234
        },
        {
            id: 9,
            name: "Hooded Sweatshirt",
            price: 49.99,
            originalPrice: 69.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            rating: 4.3,
            reviews: 67
        },
        {
            id: 10,
            name: "Formal Shirt",
            price: 69.99,
            originalPrice: 89.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybWFsJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.7,
            reviews: 123
        },
        {
            id: 11,
            name: "Running Shoes",
            price: 119.99,
            originalPrice: 149.99,
            category: "shoes",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.9,
            reviews: 189
        },
        {
            id: 12,
            name: "Jeans",
            price: 79.99,
            originalPrice: 99.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.5,
            reviews: 98
        },
        {
            id: 13,
            name: "Wireless Headphones",
            price: 199.99,
            originalPrice: 249.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.7,
            reviews: 156
        },
        {
            id: 14,
            name: "Leather Wallet",
            price: 39.99,
            originalPrice: 59.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            rating: 4.4,
            reviews: 89
        },
        {
            id: 15,
            name: "Winter Coat",
            price: 189.99,
            originalPrice: 249.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.8,
            reviews: 234
        },
        {
            id: 16,
            name: "High Heels",
            price: 129.99,
            originalPrice: 159.99,
            category: "shoes",
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.6,
            reviews: 167
        },
        {
            id: 17,
            name: "Sunglasses",
            price: 79.99,
            originalPrice: 99.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.5,
            reviews: 134
        },
        {
            id: 18,
            name: "Backpack",
            price: 89.99,
            originalPrice: 119.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.7,
            reviews: 198
        },
        {
            id: 19,
            name: "Polo Shirt",
            price: 44.99,
            originalPrice: 59.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9sb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.3,
            reviews: 76
        },
        {
            id: 20,
            name: "Skirt",
            price: 54.99,
            originalPrice: 74.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.6,
            reviews: 143
        },
        {
            id: 21,
            name: "Sandals",
            price: 69.99,
            originalPrice: 89.99,
            category: "shoes",
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.4,
            reviews: 112
        },
        {
            id: 22,
            name: "Belt",
            price: 34.99,
            originalPrice: 49.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.2,
            reviews: 67
        },
        {
            id: 23,
            name: "Sweater",
            price: 64.99,
            originalPrice: 84.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            rating: 4.5,
            reviews: 98
        },
        {
            id: 24,
            name: "Dress Shoes",
            price: 139.99,
            originalPrice: 179.99,
            category: "shoes",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.8,
            reviews: 187
        },
        {
            id: 25,
            name: "Scarf",
            price: 24.99,
            originalPrice: 34.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcmZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.1,
            reviews: 45
        },
        {
            id: 26,
            name: "Blazer",
            price: 129.99,
            originalPrice: 159.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhemVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            rating: 4.7,
            reviews: 156
        },
        {
            id: 27,
            name: "Flip Flops",
            price: 19.99,
            originalPrice: 29.99,
            category: "shoes",
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.0,
            reviews: 89
        },
        {
            id: 28,
            name: "Tie",
            price: 29.99,
            originalPrice: 39.99,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.3,
            reviews: 67
        },
        {
            id: 29,
            name: "Shorts",
            price: 39.99,
            originalPrice: 54.99,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            rating: 4.4,
            reviews: 123
        },
        {
            id: 30,
            name: "Boots",
            price: 169.99,
            originalPrice: 199.99,
            category: "shoes",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rating: 4.9,
            reviews: 234
        }
    ];

    let filteredProducts = [...products];
    let currentSort = 'default';

    // DOM elements
    const productsGrid = document.getElementById('products-grid');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortDropdown = document.getElementById('sort-dropdown');

    // Initialize
    renderProducts(filteredProducts);
    updateCartCount();
    updateWishlistCount();

    // Event listeners
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    sortDropdown.addEventListener('change', handleSortChange);

    function renderProducts(productsToRender) {
        productsGrid.innerHTML = '';
        
        if (productsToRender.length === 0) {
            productsGrid.innerHTML = '<div class="no-products"><p>No products found matching your criteria.</p></div>';
            return;
        }

        productsToRender.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const discount = product.originalPrice > product.price ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : ''}
                <button class="quick-add" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="wishlist-add" onclick="addToWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice > product.price ? 
                        `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="btn btn-primary" onclick="viewProduct(${product.id})">
                    View Details
                </button>
            </div>
        `;

        return card;
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

    function getMaterialByCategory(category) {
        const materials = {
            'shoes': 'Leather/Synthetic',
            'clothing': 'Cotton/Blend',
            'accessories': 'Premium Materials'
        };
        return materials[category] || 'Premium Quality';
    }

    function filterProducts() {
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;

        filteredProducts = products.filter(product => {
            let categoryMatch = true;
            let priceMatch = true;

            if (category && product.category !== category) {
                categoryMatch = false;
            }

            if (priceRange) {
                const [min, max] = priceRange.split('-').map(Number);
                if (max) {
                    priceMatch = product.price >= min && product.price <= max;
                } else {
                    priceMatch = product.price >= min;
                }
            }

            return categoryMatch && priceMatch;
        });

        applySort();
        renderProducts(filteredProducts);
    }

    function handleSortChange() {
        currentSort = sortDropdown.value;
        applySort();
        renderProducts(filteredProducts);
    }

    function applySort() {
        switch (currentSort) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                // Sort by ID descending (assuming higher IDs are newer)
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            case 'popular':
                // Sort by number of reviews (more reviews = more popular)
                filteredProducts.sort((a, b) => b.reviews - a.reviews);
                break;
            default:
                // Keep original order (by ID ascending)
                filteredProducts.sort((a, b) => a.id - b.id);
                break;
        }
    }

    // Global functions for cart and navigation
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                originalPrice: product.originalPrice,
                image: product.image,
                category: product.category,
                quantity: 1,
                material: getMaterialByCategory(product.category)
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Show success message
        showNotification('Product added to cart!');
    };

    window.viewProduct = function(productId) {
        // Store the product ID in localStorage for the product page
        localStorage.setItem('currentProduct', productId);
        window.location.href = 'product.html';
    };

    window.addToWishlist = function(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existingItem = wishlist.find(item => item.id === productId);
        
        if (existingItem) {
            showNotification('Item already in wishlist!');
            return;
        }

        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            category: product.category,
            rating: product.rating,
            reviews: product.reviews
        });

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        showNotification('Added to wishlist!');
    };

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
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
        }, 2000);
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


