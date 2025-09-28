document.addEventListener('DOMContentLoaded', function() {
    const trackingInput = document.getElementById('tracking-input');
    const trackBtn = document.getElementById('track-btn');
    const trackingResults = document.getElementById('tracking-results');
    const noResults = document.getElementById('no-results');
    
    // Sample tracking data
    const trackingData = {
        'TRK123456789': {
            orderNumber: 'ORD-2024-001',
            orderDate: '2024-01-15',
            estimatedDelivery: '2024-01-22',
            deliveryAddress: '123 Main Street, Apt 4B, New York, NY 10001',
            status: 'in-transit',
            timeline: [
                {
                    status: 'order-placed',
                    title: 'Order Placed',
                    description: 'Your order has been received and is being processed.',
                    timestamp: '2024-01-15 10:30 AM',
                    completed: true
                },
                {
                    status: 'processing',
                    title: 'Processing',
                    description: 'Your order is being prepared for shipment.',
                    timestamp: '2024-01-15 2:45 PM',
                    completed: true
                },
                {
                    status: 'shipped',
                    title: 'Shipped',
                    description: 'Your order has been shipped and is on its way.',
                    timestamp: '2024-01-16 9:15 AM',
                    completed: true
                },
                {
                    status: 'in-transit',
                    title: 'In Transit',
                    description: 'Your package is on its way to the destination.',
                    timestamp: '2024-01-18 11:20 AM',
                    completed: false
                },
                {
                    status: 'out-for-delivery',
                    title: 'Out for Delivery',
                    description: 'Your package is out for delivery.',
                    timestamp: null,
                    completed: false
                },
                {
                    status: 'delivered',
                    title: 'Delivered',
                    description: 'Your package has been delivered.',
                    timestamp: null,
                    completed: false
                }
            ]
        },
        'TRK987654321': {
            orderNumber: 'ORD-2024-002',
            orderDate: '2024-01-10',
            estimatedDelivery: '2024-01-17',
            deliveryAddress: '456 Oak Avenue, Los Angeles, CA 90210',
            status: 'delivered',
            timeline: [
                {
                    status: 'order-placed',
                    title: 'Order Placed',
                    description: 'Your order has been received and is being processed.',
                    timestamp: '2024-01-10 3:15 PM',
                    completed: true
                },
                {
                    status: 'processing',
                    title: 'Processing',
                    description: 'Your order is being prepared for shipment.',
                    timestamp: '2024-01-10 5:30 PM',
                    completed: true
                },
                {
                    status: 'shipped',
                    title: 'Shipped',
                    description: 'Your order has been shipped and is on its way.',
                    timestamp: '2024-01-11 8:45 AM',
                    completed: true
                },
                {
                    status: 'in-transit',
                    title: 'In Transit',
                    description: 'Your package is on its way to the destination.',
                    timestamp: '2024-01-12 2:10 PM',
                    completed: true
                },
                {
                    status: 'out-for-delivery',
                    title: 'Out for Delivery',
                    description: 'Your package is out for delivery.',
                    timestamp: '2024-01-15 9:30 AM',
                    completed: true
                },
                {
                    status: 'delivered',
                    title: 'Delivered',
                    description: 'Your package has been delivered.',
                    timestamp: '2024-01-15 2:45 PM',
                    completed: true
                }
            ]
        },
        'TRK555666777': {
            orderNumber: 'ORD-2024-003',
            orderDate: '2024-01-20',
            estimatedDelivery: '2024-01-27',
            deliveryAddress: '789 Pine Street, Chicago, IL 60601',
            status: 'processing',
            timeline: [
                {
                    status: 'order-placed',
                    title: 'Order Placed',
                    description: 'Your order has been received and is being processed.',
                    timestamp: '2024-01-20 1:20 PM',
                    completed: true
                },
                {
                    status: 'processing',
                    title: 'Processing',
                    description: 'Your order is being prepared for shipment.',
                    timestamp: '2024-01-20 3:45 PM',
                    completed: false
                },
                {
                    status: 'shipped',
                    title: 'Shipped',
                    description: 'Your order has been shipped and is on its way.',
                    timestamp: null,
                    completed: false
                },
                {
                    status: 'in-transit',
                    title: 'In Transit',
                    description: 'Your package is on its way to the destination.',
                    timestamp: null,
                    completed: false
                },
                {
                    status: 'out-for-delivery',
                    title: 'Out for Delivery',
                    description: 'Your package is out for delivery.',
                    timestamp: null,
                    completed: false
                },
                {
                    status: 'delivered',
                    title: 'Delivered',
                    description: 'Your package has been delivered.',
                    timestamp: null,
                    completed: false
                }
            ]
        }
    };

    // Event listeners
    trackBtn.addEventListener('click', trackOrder);
    trackingInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            trackOrder();
        }
    });

    function trackOrder() {
        const trackingNumber = trackingInput.value.trim().toUpperCase();
        
        if (!trackingNumber) {
            showNotification('Please enter a tracking number', 'error');
            return;
        }

        if (trackingData[trackingNumber]) {
            displayTrackingInfo(trackingData[trackingNumber]);
        } else {
            showNoResults();
        }
    }

    function displayTrackingInfo(data) {
        // Update order summary
        document.getElementById('order-number').textContent = data.orderNumber;
        document.getElementById('tracking-number').textContent = trackingInput.value.trim().toUpperCase();
        document.getElementById('order-date').textContent = formatDate(data.orderDate);
        document.getElementById('estimated-delivery').textContent = formatDate(data.estimatedDelivery);
        document.getElementById('delivery-address').textContent = data.deliveryAddress;

        // Update timeline
        const timeline = document.getElementById('tracking-timeline');
        timeline.innerHTML = '';
        
        data.timeline.forEach((item, index) => {
            const timelineItem = createTimelineItem(item, index);
            timeline.appendChild(timelineItem);
        });

        // Show results
        trackingResults.style.display = 'block';
        noResults.style.display = 'none';
    }

    function createTimelineItem(item, index) {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${item.completed ? 'completed' : ''}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-icon">
                <i class="fas ${getStatusIcon(item.status)}"></i>
            </div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.timestamp ? `<span class="timeline-timestamp">${item.timestamp}</span>` : ''}
            </div>
        `;
        
        return timelineItem;
    }

    function getStatusIcon(status) {
        const icons = {
            'order-placed': 'fa-shopping-cart',
            'processing': 'fa-cog',
            'shipped': 'fa-shipping-fast',
            'in-transit': 'fa-truck',
            'out-for-delivery': 'fa-box',
            'delivered': 'fa-check-circle'
        };
        return icons[status] || 'fa-circle';
    }

    function showNoResults() {
        trackingResults.style.display = 'none';
        noResults.style.display = 'block';
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Sample tracking number click handler
    window.fillTrackingNumber = function(trackingNumber) {
        trackingInput.value = trackingNumber;
        trackingInput.focus();
    };

    // Action handlers
    window.printTracking = function() {
        window.print();
    };

    window.shareTracking = function() {
        const trackingNumber = document.getElementById('tracking-number').textContent;
        const shareText = `Track my Retrospect order: ${trackingNumber}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Track My Order',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                showNotification('Tracking information copied to clipboard!', 'success');
            });
        }
    };

    window.contactSupport = function() {
        window.location.href = 'contact.html';
    };

    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
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
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Update cart and wishlist counts
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

    // Initialize
    updateCartCount();
    updateWishlistCount();
});
