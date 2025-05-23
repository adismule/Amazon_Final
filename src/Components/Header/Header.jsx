// src/Components/Header/Header.jsx
import React from 'react';
import classes from './Header.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { IoSearchSharp, IoCartOutline } from 'react-icons/io5';
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* Logo */}
          <div className={classes.logo_container}>
            <a href="#">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </a>
          </div>

          {/* Delivery */}
          <div className={classes.delivery}>
            <span><SlLocationPin /></span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          {/* Search */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search product" />
            <button className={classes.search_icon}><IoSearchSharp /></button>
          </div>

          {/* Right Side */}
          <div className={classes.order_container}>
            <a href="#" className={classes.language}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="US flag" />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            <a href="#">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>

            <a href="#">
              <p>Returns</p>
              <span>& Orders</span>
            </a>

            <a href="#" className={classes.cart}>
              <IoCartOutline />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
