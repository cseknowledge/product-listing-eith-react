import React from "react";
import Product from "./Product";

function Products({ products }) {
  let items = [];
  items = products.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <div className="container">{items}</div>;
}

export default Products;
