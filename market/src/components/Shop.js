import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/cartslice";
import { addItem, removeItem } from "../redux/cartslice";
function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.data);
  return (
    <div className="App">
      {products === null ? (
        <button
          className="getprods"
          onClick={(e) => {
            dispatch(fetchData());
            e.target.style.display = "none";
          }}
        >
          Get Products
        </button>
      ) : (
        ""
      )}
      {products !== null ? (
        <div className="item-card">
          {products.map((item) => {
            // console.log(item.id);
            return item.title !== "abc" &&
              item.title !== "producto1" &&
              item.title !==
                "este es freddy chiquito, nunca pares de aprender" &&
              item.title !== "New Product" &&
              item.title !== "" ? (
              <div key={item.id} className="item">
                <div className="image">
                  <img src={item.images[0]} alt="" />
                </div>
                <div className="title">{item.title}</div>
                <div className="title">${item.price}</div>
                <button
                  className="addtocart"
                  onClick={(e) => {
                    dispatch(
                      addItem({
                        id: item.id,
                        name: item.title,
                        price: item.price,
                        image: item.images[0],
                      })
                    );
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="removecart"
                  onClick={(e) => {
                    dispatch(
                      removeItem({
                        id: item.id,
                        name: item.title,
                        price: item.price,
                        image: item.images[0],
                      })
                    );
                  }}
                >
                  Remove from Cart
                </button>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Shop;
