import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-logo">
            <img src="./original-logo.png" alt="" />
        </div>
        <nav className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </nav>
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <div className="footer-bottom">
          <img src="https://i.pinimg.com/564x/5b/73/45/5b73459960abeab3bd7be40fdc2fd6c3.jpg" alt="twitter logo" />
          <img src="https://www.svgrepo.com/show/144030/linkedin-square-logo.svg" alt="linked in logo" />
        </div>
        <p>© 2022. Ntwist Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
