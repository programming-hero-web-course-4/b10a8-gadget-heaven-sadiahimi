import React from 'react';
import './CategoriesSidebar.css';

function CategoriesSidebar({ filterByCategory }) {
  return (
    <div className="categories-sidebar">
      <button onClick={() => filterByCategory("All")}>All Products</button>
      <button onClick={() => filterByCategory("Laptops")}>Laptops</button>
      <button onClick={() => filterByCategory("Phones")}>Phones</button>
      <button onClick={() => filterByCategory("Accessories")}>Accessories</button>
      <button onClick={() => filterByCategory("Smart Watches")}>Smart Watches</button>
      <button onClick={() => filterByCategory("MacBook")}>MacBook</button>
      <button onClick={() => filterByCategory("iPhone")}>iPhone</button>
    </div>
  );
}

export default CategoriesSidebar;   