import React from "react";
import { MdClose } from "react-icons/md";
import './CartItem.scss'
import prod from "../../../assets/products/headphone-prod-2.webp";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="search-result-item">
        <div className="image-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">product name</span>
         <MdClose className="close-btn"/>
         <div className="quantity-buttons">
          <span>-</span>
          <span>5</span>
          <span>+</span>
         </div>
         <div className="text">
         <span>3</span>
          <span>x</span>
          <span>&#8377;4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
