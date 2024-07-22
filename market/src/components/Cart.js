import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartslice";
function Cart() {
  const cart = useSelector((state) => state.cart.userCart);
  const totalQuantity = useSelector((state) => state.cart.cartSize);
  const totalAmount = useSelector((state) => state.cart.price);
  const dispatch = useDispatch();
  return (
    <div className="cart-container">
      <div className="cart-display">
        {cart.map((item) => {
          return (
            <div key={item.id} className="item-in-cart">
              <button
                className="DeleteItem"
                onClick={(e) =>
                  dispatch(
                    removeItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                    })
                  )
                }
              >
                Remove
              </button>
              <div className="image-in-cart">
                <img src={item.image} alt="" />
              </div>
              <div className="cart-cred">
                <div className="title-in-cart">{item.name}</div>
                <div className="title-in-cart">${item.price}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="total-Cart">
        <div className="quantity">Total Quantity: {totalQuantity}</div>
        <hr></hr>
        <div className="quantity">Total Amount: ${totalAmount}</div>
      </div>
    </div>
  );
}

export default Cart;
