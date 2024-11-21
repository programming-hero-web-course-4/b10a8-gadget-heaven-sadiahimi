import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CategoriesSidebar from './components/CategoriesSidebar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import products from './data/products'; 

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products); 

  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <div className="home-content">
          <CategoriesSidebar filterByCategory={filterByCategory} />
          <div className="product-grid">
  {filteredProducts.length === 0 ? (
    <p>No data found</p> 
  ) : (
    filteredProducts.slice(0, 12).map((product) => (
      <ProductCard 
        key={product.product_id} 
        title={product.product_title} 
        price={product.price} 
        image={product.product_image} 
      />
    ))
  )}
</div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

