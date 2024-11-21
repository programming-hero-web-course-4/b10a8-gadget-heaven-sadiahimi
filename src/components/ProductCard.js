import React from 'react';
import './ProductCard.css';

function ProductCard({ title, price, image }) { // image প্রপস যুক্ত করা
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" /> {/* ইমেজ ট্যাগ যুক্ত করা */}
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <button className="view-details-btn">View Details</button>
    </div>
  );
}

export default ProductCard;                           