import React from "react";
import "./productsPanel.css";

import Product from "../Product/Product";

import { useStateValue } from "../../contexts/ProductsProvider";

export default function ProductList() {
  const [{ productsList }, dispatch] = useStateValue();

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };

  const handleAddProduct = () => {
    dispatch({
      type: "ADD_PRODUCT",
    });
  };

  return (
    <div id="products-panel">
      <div id="products-list">
        {productsList.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              description={product.description}
              price={product.price}
              onDelete={(id) => handleDelete(id)}
            />
          );
        })}
      </div>

      <div id="addbtn-container">
        <button id="addbtn" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}
