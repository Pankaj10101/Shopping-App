import React, { useEffect, useState } from "react";
import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'

import Search from "./Search/Search";
import Cart from "../Cart/Cart";

const Header = () => {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const handelScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={()=>navigate('/')}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={()=>navigate('/')}>TeeStore</div>
          <div className="right">
            <TbSearch onClick={()=>setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=>setShowCart(true)}>
              <CgShoppingCart />
              <span>0</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
