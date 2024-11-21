import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Gadget Heaven</h2>
      <p>Leading the way in cutting-edge technology and innovation.</p>
      <div className="footer-links">
        <div>
          <h4>Services</h4>
          <p>Product Support</p>
          <p>Order Tracking</p>
          <p>Shipping & Delivery</p>
          <p>Returns</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




