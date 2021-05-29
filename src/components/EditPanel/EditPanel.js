import React, { useEffect, useState } from "react";
import "./editPanel.css";

import { useSelector, useDispatch } from "react-redux";
import { saveEdit } from "../../redux/actions";

export default function EditPanel() {
  const activeProduct = useSelector((state) => state.activeProduct);
  const dispatch = useDispatch();
  const [panelStyle, setPanelStyle] = useState();
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("$");
  const [description, setDescription] = useState("");

  // Handle inputs
  const handleImgChange = (e) => {
    setImg(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Set inputs data on active product !undefined
  useEffect(() => {
    if (!activeProduct) return;
    setImg(activeProduct.img);
    setName(activeProduct.name);
    setPrice(activeProduct.price);
    setDescription(activeProduct.description);
  }, [activeProduct]);

  // Handle panel's style
  useEffect(() => {
    if (!activeProduct) setPanelStyle({ display: "none" });
    setPanelStyle({ display: "flex" });
  }, [activeProduct]);

  // Handle save
  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      saveEdit({
        id: activeProduct.id,
        name: form.name.value,
        img: form.imgUrl.value,
        price: form.price.value,
        description: form.description.value,
      })
    );
  };

  return activeProduct ? (
    <div style={panelStyle} id="edit-panel">
      <h2>{name} Details</h2>
      <form
        id="form"
        onSubmit={handleSave}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img id="img" style={{ width: "50px" }} src={img} alt={name} />
        <div className="form-section">
          <label>Image URL</label>
          <input required onChange={handleImgChange} id="imgUrl" value={img} />
        </div>
        <div className="form-section">
          <label>Product Name</label>
          <input required onChange={handleNameChange} id="name" value={name} />
        </div>
        <div className="form-section" id="desc-sec">
          <label>Description</label>
          <textarea
            required
            onChange={handleDescriptionChange}
            id="description"
            value={description}
            rows="8"
          />
        </div>
        <div className="form-section">
          <label>Price</label>
          <div>
            <input
              required
              onChange={handlePriceChange}
              id="price"
              value={price}
            />
            <span id="dollar">$</span>
          </div>
        </div>

        <button>Save</button>
      </form>
    </div>
  ) : (
    <> </>
  );
}
