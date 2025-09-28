// Product detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Product data (same as shop.js)
    const products = [
        {
            
            id: 1,
            name: "Classic Aviator Sunglasses",
            price: 89.99,
            originalPrice: 129.99,
            category: "accessories",
            images: [
                "https://picsum.photos/seed/p1a/600/600",
                "https://picsum.photos/seed/p1b/600/600",
                "https://picsum.photos/seed/p1c/600/600",
                "https://picsum.photos/seed/p1d/600/600"
            ],
            rating: 4.8,
            reviews: 127,
            description: "Timeless aviator sunglasses with premium metal frames and UV400 protection. Features a classic teardrop shape with gradient lenses for superior sun protection and style. Perfect for both casual and formal occasions.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['gold', 'silver', 'black'],
            availableColors: {
                gold: "https://via.placeholder.com/300x300/FFD700/ffffff?text=Gold+Sunglasses",
                silver: "https://via.placeholder.com/300x300/C0C0C0/ffffff?text=Silver+Sunglasses",
                black: "https://via.placeholder.com/300x300/000000/ffffff?text=Black+Sunglasses"
            }
        },
        {
            id: 2,
            name: "Leather Crossbody Bag",
            price: 149.99,
            originalPrice: 199.99,
            category: "accessories",
            images: [
                "https://picsum.photos/seed/p2a/600/600",
                "https://picsum.photos/seed/p2b/600/600",
                "https://picsum.photos/seed/p2c/600/600",
                "https://picsum.photos/seed/p2d/600/600"
            ],
            rating: 4.6,
            reviews: 89,
            description: "Handcrafted genuine leather crossbody bag with adjustable strap and multiple compartments. Features premium hardware and soft, supple leather that ages beautifully. Perfect for everyday use with ample storage space.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['brown', 'black', 'tan'],
            availableColors: {
                brown: "https://via.placeholder.com/300x300/8B4513/ffffff?text=Brown+Bag",
                black: "https://via.placeholder.com/300x300/000000/ffffff?text=Black+Bag",
                tan: "https://via.placeholder.com/300x300/D2B48C/ffffff?text=Tan+Bag"
            }
        },
        {
            id: 3,
            name: "Trendy Item 3",
            price: 39.99,
            originalPrice: 39.99,
            category: "accessories",
            images: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.9,
            reviews: 203,
            description: "Trendy and stylish accessory perfect for any occasion.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['black', 'red', 'blue'],
            availableColors: {
                black: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                red: "https://picsum.photos/300/300?random=3",
                blue: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 4,
            name: "Chic Item 4",
            price: 69.99,
            originalPrice: 69.99,
            category: "accessories",
            images: [
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.7,
            reviews: 156,
            description: "Chic and elegant design for the modern individual.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['black', 'white', 'gold'],
            availableColors: {
                black: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                white: "https://picsum.photos/300/300?random=3",
                gold: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 5,
            name: "Stylish Item 5",
            price: 45.99,
            originalPrice: 45.99,
            category: "shoes",
            images: [
                "https://picsum.photos/300/300?random=5",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.5,
            reviews: 78,
            description: "Stylish footwear for the fashion-forward individual.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['brown', 'black', 'tan'],
            availableColors: {
                brown: "https://picsum.photos/300/300?random=5",
                black: "https://picsum.photos/300/300?random=3",
                tan: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 6,
            name: "Modern Item 6",
            price: 55.99,
            originalPrice: 55.99,
            category: "clothing",
            images: [
                "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.4,
            reviews: 92,
            description: "Modern clothing piece for contemporary style.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['blue', 'black', 'white'],
            availableColors: {
                blue: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                black: "https://picsum.photos/300/300?random=3",
                white: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 7,
            name: "Trendy Item 7",
            price: 35.99,
            originalPrice: 35.99,
            category: "clothing",
            images: [
                "https://plus.unsplash.com/premium_photo-1711051513016-72baa1035293?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.6,
            reviews: 145,
            description: "Trendy clothing item for fashion enthusiasts.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['red', 'black', 'blue'],
            availableColors: {
                red: "https://plus.unsplash.com/premium_photo-1711051513016-72baa1035293?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                black: "https://picsum.photos/300/300?random=3",
                blue: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 8,
            name: "Chic Item 8",
            price: 65.99,
            originalPrice: 65.99,
            category: "clothing",
            images: [
                "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.8,
            reviews: 234,
            description: "Chic and sophisticated clothing piece.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['white', 'black', 'pink'],
            availableColors: {
                white: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                black: "https://picsum.photos/300/300?random=3",
                pink: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 9,
            name: "Stylish Item 9",
            price: 42.99,
            originalPrice: 42.99,
            category: "clothing",
            images: [
                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3QlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.3,
            reviews: 67,
            description: "Stylish clothing item for everyday wear.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['grey', 'black', 'navy'],
            availableColors: {
                grey: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3QlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                black: "https://picsum.photos/300/300?random=3",
                navy: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 10,
            name: "Modern Item 10",
            price: 52.99,
            originalPrice: 52.99,
            category: "clothing",
            images: [
                "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3QlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.7,
            reviews: 123,
            description: "Modern clothing piece for contemporary style.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['green', 'black', 'white'],
            availableColors: {
                green: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3QlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                black: "https://picsum.photos/300/300?random=3",
                white: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 11,
            name: "Trendy Item 11",
            price: 32.99,
            originalPrice: 32.99,
            category: "clothing",
            images: [
                "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3QlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.9,
            reviews: 189,
            description: "Trendy clothing item for fashion-forward individuals.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['orange', 'black', 'blue'],
            availableColors: {
                orange: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3QlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                black: "https://picsum.photos/300/300?random=3",
                blue: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        },
        {
            id: 12,
            name: "Chic Item 12",
            price: 62.99,
            originalPrice: 62.99,
            category: "clothing",
            images: [
                "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://picsum.photos/300/300?random=3",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ],
            rating: 4.5,
            reviews: 98,
            description: "Chic and elegant clothing piece for sophisticated style.",
            sizes: [7, 8, 9, 10, 11],
            colors: ['purple', 'black', 'white'],
            availableColors: {
                purple: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                black: "https://picsum.photos/300/300?random=3",
                white: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
        }
    ];

    let currentProduct = null;
    let selectedSize = 9;
    let selectedColor = 'red';
    let selectedQuantity = 1;

    // DOM elements
    const mainImage = document.getElementById('main-product-image');
    const productTitle = document.getElementById('product-title');
    const productPrice = document.getElementById('product-price');
    const quantityInput = document.getElementById('quantity');
    const decreaseQty = document.getElementById('decrease-qty');
    const increaseQty = document.getElementById('increase-qty');
    const addToCartBtn = document.getElementById('add-to-cart');
    const wishlistBtn = document.getElementById('wishlist');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const sizeButtons = document.querySelectorAll('.size-btn');
    const colorButtons = document.querySelectorAll('.color-btn');

    // Initialize
    loadProduct();
    updateCartCount();
    updateWishlistCount();

    function loadProduct() {
        const productId = parseInt(localStorage.getItem('currentProduct')) || 1;
        currentProduct = products.find(p => p.id === productId) || products[0];
        
        if (currentProduct) {
            displayProduct(currentProduct);
            checkWishlistStatus();
        }
    }

    function displayProduct(product) {
        // Update main content
        productTitle.textContent = product.name;
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        
        // Update product description
        const descriptionElement = document.querySelector('.product-description p');
        if (descriptionElement) {
            descriptionElement.textContent = product.description;
        }
        
        // Set default color to first available color if current color is not available
        if (!product.colors.includes(selectedColor)) {
            selectedColor = product.colors[0];
        }
        
        // Set main image
        const colorImage = product.availableColors[selectedColor];
        mainImage.src = colorImage;
        mainImage.alt = product.name;

        // Update thumbnails
        updateThumbnails(product);

        // Update size buttons
        updateSizeButtons(product.sizes);

        // Update color buttons
        updateColorButtons(product.colors);
    }

    function updateThumbnails(product) {
        const colorImages = Object.values(product.availableColors);
        thumbnails.forEach((thumb, index) => {
            if (index < colorImages.length) {
                thumb.src = colorImages[index];
                thumb.alt = `${product.name} - View ${index + 1}`;
            }
        });
    }

    function updateSizeButtons(availableSizes) {
        sizeButtons.forEach(btn => {
            const size = parseInt(btn.dataset.size);
            if (availableSizes.includes(size)) {
                btn.disabled = false;
                btn.classList.remove('disabled');
                // Set active state for selected size
                if (size === selectedSize) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            } else {
                btn.disabled = true;
                btn.classList.add('disabled');
                btn.classList.remove('active');
            }
        });
    }

    function updateColorButtons(availableColors) {
        colorButtons.forEach(btn => {
            const color = btn.dataset.color;
            if (availableColors.includes(color)) {
                btn.disabled = false;
                btn.classList.remove('disabled');
                // Set active state for selected color
                if (color === selectedColor) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            } else {
                btn.disabled = true;
                btn.classList.add('disabled');
                btn.classList.remove('active');
            }
        });
    }

    // Event listeners
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumb.classList.add('active');
            // Update main image
            mainImage.src = thumb.src;
        });
    });

    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn.disabled) {
                // Remove active class from all size buttons
                sizeButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                selectedSize = parseInt(btn.dataset.size);
            }
        });
    });

    colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn.disabled) {
                // Remove active class from all color buttons
                colorButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                selectedColor = btn.dataset.color;
                
                // Update main image to show selected color
                if (currentProduct && currentProduct.availableColors[selectedColor]) {
                    mainImage.src = currentProduct.availableColors[selectedColor];
                }
            }
        });
    });

    // Quantity controls
    decreaseQty.addEventListener('click', () => {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            quantityInput.value = selectedQuantity;
        }
    });

    increaseQty.addEventListener('click', () => {
        if (selectedQuantity < 10) {
            selectedQuantity++;
            quantityInput.value = selectedQuantity;
        }
    });

    quantityInput.addEventListener('change', () => {
        const value = parseInt(quantityInput.value);
        if (value >= 1 && value <= 10) {
            selectedQuantity = value;
        } else {
            quantityInput.value = selectedQuantity;
        }
    });

    // Add to cart
    addToCartBtn.addEventListener('click', () => {
        if (!currentProduct) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => 
            item.id === currentProduct.id && 
            item.size === selectedSize && 
            item.color === selectedColor
        );

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += selectedQuantity;
        } else {
            cart.push({
                id: currentProduct.id,
                name: currentProduct.name,
                price: currentProduct.price,
                originalPrice: currentProduct.originalPrice,
                image: currentProduct.availableColors[selectedColor],
                category: currentProduct.category,
                size: selectedSize,
                color: selectedColor,
                quantity: selectedQuantity,
                material: getMaterialByCategory(currentProduct.category)
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Show success message
        showNotification('Product added to cart!');
    });

    // Wishlist
    wishlistBtn.addEventListener('click', () => {
        if (!currentProduct) return;

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existingItemIndex = wishlist.findIndex(item => item.id === currentProduct.id);
        
        if (existingItemIndex !== -1) {
            // Remove from wishlist
            wishlist.splice(existingItemIndex, 1);
            wishlistBtn.classList.remove('active');
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
            showNotification('Removed from wishlist!');
        } else {
            // Add to wishlist
            wishlist.push({
                id: currentProduct.id,
                name: currentProduct.name,
                price: currentProduct.price,
                originalPrice: currentProduct.originalPrice,
                image: currentProduct.images[0],
                category: currentProduct.category,
                rating: currentProduct.rating,
                reviews: currentProduct.reviews
            });
            wishlistBtn.classList.add('active');
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';
            showNotification('Added to wishlist!');
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    });

    // Check if product is already in wishlist on load
    function checkWishlistStatus() {
        if (!currentProduct) return;
        
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isInWishlist = wishlist.find(item => item.id === currentProduct.id);
        
        if (isInWishlist) {
            wishlistBtn.classList.add('active');
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';
        } else {
            wishlistBtn.classList.remove('active');
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
        }
    }

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

    function getMaterialByCategory(category) {
        const materials = {
            'shoes': 'Leather/Synthetic',
            'clothing': 'Cotton/Blend',
            'accessories': 'Premium Materials'
        };
        return materials[category] || 'Premium Quality';
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

