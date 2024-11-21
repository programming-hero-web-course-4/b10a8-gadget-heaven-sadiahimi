const products = [
  {
    product_id: 1,
    product_title: "Dell XPS 13",
    product_image: "https://computermania-bd.b-cdn.net/wp-content/uploads/Dell-XPS-13-Plus-BD-Price-1.jpg",
    category: "Laptops",
    price: 999.99,
    description: "A high-end laptop with superb build quality and performance.",
    specification: ["Intel i7", "16GB RAM", "512GB SSD", "13.3 inch FHD"],
    availability: true,
    rating: 4.5
  },
  {
    product_id: 2,
    product_title: "iPhone 13",
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmI1XO6V35fX43svG6fzJRBfvkev_yK6ToA&s",
    category: "Phones",
    price: 799.99,
    description: "The latest iPhone model with an improved camera and processor.",
    specification: ["128GB Storage", "A15 Bionic", "5G support"],
    availability: true,
    rating: 4.7
  },
  {
    product_id: 3,
    product_title: "Apple Watch Series 7",
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOs0Ee2UM2pSdlKR-dLp0seRHomx0UnPIj_w&s",
    category: "Smart Watches",
    price: 399.99,
    description: "The newest Apple Watch with enhanced fitness tracking.",
    specification: ["GPS", "Heart Rate Monitor", "Water Resistant"],
    availability: true,
    rating: 4.6
  },
  {
    product_id: 4,
    product_title: "Anker PowerCore",
    product_image: "https://ankerbd.com/wp-content/uploads/2021/10/Powercore-Select-1000-1.png",
    category: "Chargers",
    price: 49.99,
    description: "A powerful power bank with high capacity and fast charging.",
    specification: ["10000mAh", "USB-C", "Fast Charging"],
    availability: true,
    rating: 4.4
  },
  {
    product_id: 5,
    product_title: "MacBook Pro 14",
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&s",
    category: "Laptops",
    price: 1999.99,
    description: "Apple's latest MacBook with M1 Pro chip and improved battery life.",
    specification: ["M1 Pro", "16GB RAM", "1TB SSD", "14 inch Retina Display"],
    availability: true,
    rating: 4.8
  },
  {
    product_id: 6,
    product_title: "Samsung Galaxy S21",
    product_image: "https://images-cdn.ubuy.co.in/6555f61544bf3905411144d6-restored-samsung-galaxy-s21-5g-128gb.jpg",
    category: "Phones",
    price: 699.99,
    description: "Samsung's flagship phone with an amazing display and camera.",
    specification: ["128GB Storage", "Exynos 2100", "5G"],
    availability: true,
    rating: 4.6
  },
  {
    product_id: 7,
    product_title: "JBL Charge 4",
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUsLb9mlREQuB4d4lEWlZcs7JxF_AHQ8ygQ&s",
    category: "Accessories",
    price: 139.99,
    description: "Portable Bluetooth speaker with great sound and battery life.",
    specification: ["20 hours playtime", "Waterproof", "USB-C"],
    availability: true,
    rating: 4.5
  },
  {
    product_id: 8,
    product_title: "Apple AirPods Pro",
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2-5rGUTfacv3kcNhx44DT9zjliNWWzf8bA&s",
    category: "Accessories",
    price: 249.99,
    description: "Wireless earbuds with noise cancellation and great sound quality.",
    specification: ["Active Noise Cancellation", "Transparency Mode"],
    availability: true,
    rating: 4.7
  },
  {
    product_id: 9,
    product_title: "OnePlus 9 Pro",
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTx0SNehfHO1aF0Zu1JIoEvvopMzerfRjmw&s",
    category: "Phones",
    price: 929.99,
    description: "Flagship phone with fast charging and high-end specifications.",
    specification: ["256GB Storage", "Snapdragon 888", "5G"],
    availability: true,
    rating: 4.4
  },
  {
    product_id: 10,
    product_title: "Samsung Galaxy Tab S7",
    product_image: "https://m.media-amazon.com/images/I/41NV1Y9XrEL._AC_.jpg",
    category: "Tablets",
    price: 649.99,
    description: "High-performance Android tablet with a stunning display.",
    specification: ["128GB Storage", "S Pen included", "11 inch TFT Display"],
    availability: true,
    rating: 4.6
  },
  {
    product_id: 11,
    product_title: "Sony WH-1000XM5",
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Q3_z0ycStgE3RShPArduzMGLEBvPSZQyzg&s",
    category: "Headphones",
    price: 349.99,
    description: "Noise-cancelling headphones with exceptional sound quality.",
    specification: ["Noise Cancellation", "30 Hours Playtime", "Touch Control"],
    availability: true,
    rating: 4.8
  },
  {
    product_id: 12,
    product_title: "Oculus Quest 2",
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUJKPN1ByDTMFs44grNy8DeBoxFhgbLFOnw&s",
    category: "Gaming",
    price: 299.99,
    description: "VR headset for immersive gaming experience.",
    specification: ["64GB Storage", "Wireless", "Oculus Link Support"],
    availability: true,
    rating: 4.7
  }
];

export default products;