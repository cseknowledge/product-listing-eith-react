import React from "react";

function Product(props) {
  const { product } = props;
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div className="product" key={id}>
      <img className="product-image" src={image} alt="" />
      <h2 className="header">{title}</h2>
      <span className="category">{category}</span>
      <p className="description">{description}</p>
      <div className="info">
        <span className="price">${price}</span>
        <span className="rating">{rating.rate}/5</span>
      </div>
      <div className="btn">Add to cart</div>
      <div className="quickview">Quickview</div>
    </div>
  );
}

export default Product;
