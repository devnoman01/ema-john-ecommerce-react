import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { id, img, name, price, seller, ratings } = product;

  return (
    <div className="card">
      <img src={img} alt=""></img>
      <p className="name">{name}</p>
      <p className="price">
        Price: <b>$ {price}</b>
      </p>
      <p>
        <small>Manufacturer: {seller}</small>
      </p>
      <p className="rating">
        <small>Rating: {ratings}</small>
      </p>
      <button onClick={() => handleAddToCart(product)} className="addToCart">
        Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
