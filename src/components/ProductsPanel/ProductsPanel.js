import React, { useEffect, useState } from "react";
import "./productsPanel.css";

import Product from "../Product/Product";

import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../redux/actions";

export default function ProductsPanel() {
  const productsList = useSelector((state) => state.productsList);
  const [filteredList, setFilteredList] = useState(productsList);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleAddProduct = () => {
    dispatch(addProduct());
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // handle the search
  useEffect(() => {
    if (!productsList) return;
    if (input === "") setFilteredList(productsList);
    const newList = productsList.filter(
      (product) =>
        product.name.toLowerCase().includes(input) ||
        product.description.toLowerCase().includes(input)
    );
    setFilteredList(newList);
  }, [input, productsList]);

  return (
    <div id="products-panel">
      <div id="search-container">
        <input
          id="search"
          onChange={handleChange}
          value={input}
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
      <div id="products-list">
        {filteredList.map((product) => {
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
