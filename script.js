// Basic script file for potential future interactions

// Example: Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add specific logic for animations if needed beyond CSS
console.log("Script loaded.");

// Intersection Observer for Collection Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const revealSection = document.querySelector('.collection-reveal-section');
    const imageWrapper = document.querySelector('.image-stack-wrapper');

    if (!revealSection || !imageWrapper) {
        console.error('Collection reveal section or image wrapper not found.');
        return;
    }

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imageWrapper.classList.add('is-visible');
                // Optional: unobserve after first reveal if you only want it to happen once
                // observer.unobserve(entry.target);
            } else {
                imageWrapper.classList.remove('is-visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(revealSection);
});

// Daily Special 3D Rotation Interaction
document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.querySelector('.product-3d-viewer');
    const image = document.getElementById('special-product-image');

    if (!viewer || !image) {
        console.error('Daily special viewer or image not found.');
        return;
    }

    let isDragging = false;
    let startX;
    let currentRotationY = 0;
    const rotationSensitivity = 0.5; // Adjust how fast it rotates with drag

    // --- Helper to get current rotation --- 
    // NOTE: Parsing transform matrix is complex. We'll track rotation manually.
    // If animation is running, this manual tracking might desync slightly 
    // when interaction stops/starts, but it's simpler for this demo.

    const startDrag = (clientX) => {
        isDragging = true;
        startX = clientX;
        image.classList.add('is-dragging'); // Pause CSS animation
        // We don't try to read the current angle from CSS animation here 
        // for simplicity. Manual rotation overrides.
    };

    const drag = (clientX) => {
        if (!isDragging) return;
        const deltaX = clientX - startX;
        currentRotationY += deltaX * rotationSensitivity;
        image.style.transform = `rotateY(${currentRotationY}deg)`;
        startX = clientX; // Update startX for continuous drag
    };

    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        image.classList.remove('is-dragging'); // Resume CSS animation
        // Reset inline style so CSS animation takes over smoothly
        // Small delay might be needed if animation doesn't resume perfectly
        setTimeout(() => {
             if (!isDragging) { // Check again in case drag restarted quickly
                image.style.transform = ''; 
             }
        }, 50); 
    };

    // Mouse Events
    viewer.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent default image drag
        startDrag(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
        drag(e.clientX);
    });

    document.addEventListener('mouseup', () => {
        endDrag();
    });
    
    // Prevent mouseup outside window issue
     document.addEventListener('mouseleave', () => {
        endDrag();
    });

    // Touch Events
    viewer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            // e.preventDefault(); // Allow page scroll
            startDrag(e.touches[0].clientX);
        }
    }, { passive: true }); // Use passive: true for better scroll performance

    document.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
             drag(e.touches[0].clientX);
        }
    }, { passive: true });

    document.addEventListener('touchend', () => {
        endDrag();
    });

     viewer.addEventListener('dragstart', (e) => e.preventDefault()); // Extra drag prevention
});

// Image Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = modal.querySelector('.close-button');
    const prevButton = modal.querySelector('.prev-button'); // Get prev button
    const nextButton = modal.querySelector('.next-button'); // Get next button
    const thumbnails = Array.from(document.querySelectorAll('.slider-thumbnail')); // Convert to array

    let currentImageIndex = 0; // Track current image index

    if (!modal || !modalImage || !closeButton || !prevButton || !nextButton) {
        console.error('Modal or navigation elements not found.');
        return;
    }

    const openModal = (startIndex) => {
        currentImageIndex = startIndex;
        updateModalImage();
        modal.classList.add('visible');
    };

    const closeModal = () => {
        modal.classList.remove('visible');
        // Optional: Clear src after fade out for performance
        // setTimeout(() => { modalImage.src = ''; }, 300); 
    };

    // Helper function to update the modal image source
    const updateModalImage = () => {
        const thumb = thumbnails[currentImageIndex];
        const largeSrc = thumb.dataset.largeSrc || thumb.src;
        modalImage.src = largeSrc;
        modalImage.alt = thumb.alt; // Update alt text too
    };

    // Function to show the next image
    const showNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
        updateModalImage();
    };

    // Function to show the previous image
    const showPrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
        updateModalImage();
    };

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            openModal(index); // Pass the index when opening
        });
    });

    closeButton.addEventListener('click', closeModal);
    prevButton.addEventListener('click', showPrevImage); // Add listener
    nextButton.addEventListener('click', showNextImage); // Add listener

    // Close modal if user clicks on the overlay background
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Check if the click was directly on the overlay
            closeModal();
        }
    });

    // Optional: Close modal with Escape key / Navigate with arrows
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('visible')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
}); 