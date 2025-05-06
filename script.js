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

// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Optional: Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // Optional: Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    }
});

// Detail Slider Logic - NON-LOOPING VERSION
document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.querySelector('.detail-slider-viewport');
    if (!viewport) return;

    const track = viewport.querySelector('.detail-slider-track');
    const slides = Array.from(track.querySelectorAll('.slider-thumbnail'));
    const prevButton = viewport.querySelector('.detail-slider-nav.prev');
    const nextButton = viewport.querySelector('.detail-slider-nav.next');
    // const slidesOriginalCount = slides.length / 2; // No longer duplicating
    const slidesCount = slides.length;

    if (!track || slides.length === 0 || !prevButton || !nextButton) {
        console.error('Detail slider elements not found.');
        return;
    }

    let slideWidth = 0;
    let gap = 0;
    let visibleSlides = 0;
    let trackWidth = 0;
    let viewportWidth = 0;
    let maxTranslateX = 0;
    let currentIndex = 0; // Index of the first visible slide
    // Remove auto-slide variables
    // let intervalId = null;
    let isDragging = false;
    let startPosX = 0;
    let currentTranslateX = 0;
    let dragThreshold = 50; // Min distance to swipe

    const updateDimensions = () => {
        if (slidesCount === 0) return;
        slideWidth = slides[0].offsetWidth;
        gap = parseFloat(window.getComputedStyle(track).gap) || 8;
        viewportWidth = viewport.offsetWidth;
        trackWidth = slides.reduce((acc, slide) => acc + slide.offsetWidth, 0) + (slidesCount - 1) * gap;
        visibleSlides = Math.floor((viewportWidth + gap) / (slideWidth + gap));

        // Calculate the maximum translation allowed
        maxTranslateX = Math.max(0, trackWidth - viewportWidth);

        // Adjust current index if it's now out of bounds
        if (currentIndex * (slideWidth + gap) > maxTranslateX) {
           // This calculation might need refinement depending on desired behavior
           // For now, let's try setting it to the last possible position
            currentIndex = Math.max(0, slidesCount - visibleSlides);
        }
        
        track.style.transition = 'none'; // Disable transition for immediate jump
        currentTranslateX = Math.max(-maxTranslateX, Math.min(0, -currentIndex * (slideWidth + gap)));
        track.style.transform = `translateX(${currentTranslateX}px)`;
        setTimeout(() => { track.style.transition = 'transform 0.5s ease'; }, 0); // Re-enable after jump
        updateNavButtons();
    };

    const moveToSlide = (index) => {
        // Calculate target translation, clamping between 0 and -maxTranslateX
        let targetTranslateX = Math.max(-maxTranslateX, Math.min(0, -index * (slideWidth + gap)));
        track.style.transform = `translateX(${targetTranslateX}px)`;
        currentTranslateX = targetTranslateX;
        updateNavButtons();
    };

    const updateNavButtons = () => {
        // Hide buttons entirely if no scrolling is possible
        const isScrollable = trackWidth > viewportWidth;
        prevButton.style.display = isScrollable ? 'block' : 'none';
        nextButton.style.display = isScrollable ? 'block' : 'none';

        if (!isScrollable) return; // No need to check disabled state if hidden

        prevButton.disabled = currentTranslateX >= 0; // Disable prev if at start
        // Disable next if the end of the track is already visible
        nextButton.disabled = currentTranslateX <= -maxTranslateX;
        // Optionally add classes to visually style disabled state
        prevButton.style.opacity = prevButton.disabled ? '0.5' : '1';
        nextButton.style.opacity = nextButton.disabled ? '0.5' : '1';
    };

    const shiftSlide = (direction) => {
        // Determine how many slides to move (e.g., 1 or number of visible slides)
        // Simple approach: move by 1 index position
        let nextIndex = currentIndex + direction;

        // Clamp the index within bounds
        // We need to consider how many slides fit in the viewport
        // Clamp based on translation, not just index
        if (direction > 0) { // Moving right (showing next)
            // Calculate potential new translation
            let potentialTranslate = Math.max(-maxTranslateX, Math.min(0, currentTranslateX - (slideWidth + gap)));
            // Only move if translation actually changes
            if (potentialTranslate !== currentTranslateX) {
                currentIndex = Math.min(slidesCount - visibleSlides, nextIndex); // Update index roughly
                currentTranslateX = potentialTranslate;
            }
        } else { // Moving left (showing previous)
            let potentialTranslate = Math.max(-maxTranslateX, Math.min(0, currentTranslateX + (slideWidth + gap)));
            if (potentialTranslate !== currentTranslateX) {
                 currentIndex = Math.max(0, nextIndex); // Update index roughly
                 currentTranslateX = potentialTranslate;
            }
        }

        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(${currentTranslateX}px)`;
        updateNavButtons();

        // Remove infinite loop logic and transitionend handler
    };

    // --- Remove Auto Slide Logic ---
    // const startAutoSlide = () => { ... };
    // const stopAutoSlide = () => { ... };

    // --- Event Listeners ---
    prevButton.addEventListener('click', () => {
        shiftSlide(-1);
        // stopAutoSlide(); // Removed
    });

    nextButton.addEventListener('click', () => {
        shiftSlide(1);
        // stopAutoSlide(); // Removed
    });

    // Remove hover listeners for auto-slide
    // viewport.addEventListener('mouseenter', stopAutoSlide);
    // viewport.addEventListener('mouseleave', startAutoSlide);

    // Touch Events for Swipe
    viewport.addEventListener('touchstart', (e) => {
        isDragging = true;
        startPosX = e.touches[0].clientX;
        // Get current translate from style
        currentTranslateX = parseFloat(track.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        track.style.transition = 'none'; // Stop transition during drag
        // stopAutoSlide(); // Removed
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentPosX = e.touches[0].clientX;
        let diffX = currentPosX - startPosX;
        // Clamp translation during drag
        let newTranslateX = Math.max(-maxTranslateX, Math.min(0, currentTranslateX + diffX));
        track.style.transform = `translateX(${newTranslateX}px)`;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const endPosX = e.changedTouches[0].clientX;
        const diffX = endPosX - startPosX;

        // Update the actual currentTranslateX based on final position
        currentTranslateX = parseFloat(track.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

        if (Math.abs(diffX) > dragThreshold) {
            // Swipe detected - Determine direction and attempt to shiftSlide by 1
            // shiftSlide(diffX < 0 ? 1 : -1); // Let shiftSlide handle clamping
            // Simpler approach: Just snap to the final dragged position
            track.style.transition = 'transform 0.5s ease'; 
            // No need to call shiftSlide here, just ensure buttons update
            updateNavButtons();
        } else {
            // No significant swipe, snap back to the nearest valid position? Or stay?
            // For now, just stay at the end drag position and update buttons
             track.style.transition = 'transform 0.5s ease';
             // moveToSlide(currentIndex); // Don't snap back, stay where dragged
             updateNavButtons();
        }
        // startAutoSlide(); // Removed
    });

    // Ensure clicks on thumbnails still work 
    slides.forEach(slide => {
        slide.addEventListener('click', (e) => {
            if (isDragging) { 
                // Prevent click if it was part of a drag
                // This needs careful handling, might be too aggressive
                // e.preventDefault(); 
            } 
        });
    });

    // Re-calculate dimensions on resize
    window.addEventListener('resize', updateDimensions);

    // Initial setup
    // startAutoSlide(); // Removed
    updateDimensions(); // Initial calculation & button state
});

// Intersection Observer for Collection Items on Mobile
document.addEventListener('DOMContentLoaded', () => {
    const collectionItems = document.querySelectorAll('.collection-item');

    if (collectionItems.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Only apply animation on smaller screens
            if (entry.isIntersecting && window.innerWidth < 992) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Optional: Animate only once
            } else if (!entry.isIntersecting && window.innerWidth < 992) {
                 // Optional: Reset if it goes out of view and you want it to re-animate
                 // entry.target.classList.remove('is-visible');
            } else if (window.innerWidth >= 992) {
                 // Ensure class is removed on larger screens if resize happens
                 entry.target.classList.remove('is-visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeItems = () => {
        collectionItems.forEach(item => {
            if (window.innerWidth < 992) {
                observer.observe(item);
            } else {
                // If screen is large, remove visibility class and stop observing
                item.classList.remove('is-visible'); 
                observer.unobserve(item);
            }
        });
    }

    // Initial check and observe
    observeItems();

    // Re-check on resize
    window.addEventListener('resize', observeItems);
});

// Intersection Observer for Section Headings
document.addEventListener('DOMContentLoaded', () => {
    // Target specific section headings
    const headings = document.querySelectorAll('.slideshow-section h2, .daily-special-section h2, .item-grid h2, .collection-reveal-section h2');

    if (headings.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it's fully in view
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    headings.forEach(heading => observer.observe(heading));
}); 
