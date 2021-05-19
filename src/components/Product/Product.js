import React, { useEffect, useState } from "react";
import "./product.css";

import { useStateValue } from "../../contexts/ProductsProvider";

export default function Product(props) {
  const [{ activeProduct }, dispatch] = useStateValue();
  const [productStyle, setProductStyle] = useState();

  const onDelete = () => {
    props.onDelete(props.id);
  };

  const onProductClick = (e) => {
    if (e.target.id === "delete-btn") return;
    dispatch({
      type: "TOGGLE_ACTIVE",
      payload: {
        id: props.id,
        name: props.name,
        price: props.price,
        img: props.img,
        description: props.description,
      },
    });
  };

  useEffect(() => {
    if (!activeProduct) return;
    setProductStyle();
    if (activeProduct.name === props.name) {
      setProductStyle({ background: "rgba(0, 0, 0, 0.33)" });
    }
  }, [activeProduct, props.name]);

  return (
    <div onClick={onProductClick} style={productStyle} id="product">
      <img src={props.img} alt={props.name} />
      <div className="text-container">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>

      <button id="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
