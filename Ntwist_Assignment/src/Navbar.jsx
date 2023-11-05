import React from 'react';
import './nav.css';
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="Your Logo" />
      </div>
      <ul className="menu">
        <li><a href="/">HOME</a></li>
        <li><a href="/">INDUSTRIES</a> 
          {/* <ul className="dropdown">
            <li><a href="/">A1</a></li>
            <li><a href="/">A2</a></li>
            <li><a href="/">A3</a></li>
            <li><a href="/">A4</a></li>
          </ul> */}
        </li>
        <li><a href="/">AI SOFTWARE</a></li>
        <li><a href="/">BLOG</a></li>
        <li><a href="/">CONTACT US</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
