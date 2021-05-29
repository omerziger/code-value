export const toggleActive = (item) => {
  return {
    type: "TOGGLE_ACTIVE",
    payload: item,
  };
};
export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};
export const saveEdit = (editedItem) => {
  return {
    type: "SAVE_PRODUCT_EDIT",
    payload: editedItem,
  };
};
export const addProduct = () => {
  return {
    type: "ADD_PRODUCT",
  };
};
