import React from "react";
import "./productsPanel.css";

import Product from "../Product/Product";

import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../redux/actions";

export default function ProductsPanel() {
  const productsList = useSelector((state) => state.productsList);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleAddProduct = () => {
    dispatch(addProduct());
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
