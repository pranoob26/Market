import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const cart = useSelector((state) => state.cart.cartSize);
  console.log(cart);
  const icon = {
    "background-color": "skyblue",
    color: "black",
    cursor: "default",
  };
  return (
    <div className="navbar">
      <ul className="navbar-item">
        <li style={icon}>
          <AiOutlineShoppingCart style={icon} />
        </li>
        <Link to="/">
          <li>Shop</li>
        </Link>

        <Link to="/Cart">
          <li>Cart ({cart})</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
