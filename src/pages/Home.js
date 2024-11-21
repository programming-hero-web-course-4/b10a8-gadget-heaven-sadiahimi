import React from 'react';
import Banner from '../components/Banner';
import CategoriesSidebar from '../components/CategoriesSidebar';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-content">
        <CategoriesSidebar />
        <div className="product-grid">
          <ProductCard title="Dell XPS 13" price="99.99k" />
          <ProductCard title="Dell XPS 13" price="99.99k" />
          <ProductCard title="Dell XPS 13" price="99.99k" />
          <ProductCard title="Dell XPS 13" price="99.99k" />
          <ProductCard title="Dell XPS 13" price="99.99k" />
          <ProductCard title="Dell XPS 13" price="99.99k" />
        </div>
      </div>
    </div>
  );
};

export default Home;



