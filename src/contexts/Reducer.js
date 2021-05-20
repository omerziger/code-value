export const initialState = {
  productsList: [
    {
      id: 0,
      name: "Red Apple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "0.75",
      img: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png",
    },
    {
      id: 1,
      name: "Orange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "0.60",
      img: "https://lh3.googleusercontent.com/proxy/P4gAPp_uVRRXx96_GR88O0TolFPi-_enZWjGZeZb_VVDWJ06j9HjYnko5QgDP9hXPxsY7F24Wf_nfsFRwVlYeR-TNLkYsXqvcwVRrmP43v9ds2NvVr2D4ENRFQ",
    },
    {
      id: 2,
      name: "Banana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "0.55",
      img: "https://lh3.googleusercontent.com/proxy/Ck4_DBnD6W6uljt8OIWheGT3X2sw2v-UVBU3OP3NXkUORCkGyG7AHuwADFyDQEzpJvetqerPoPp5OYJLIdKnFvQK2_bOqiXRy2NT0kqHX5YAJqKVbQbhmDUhyk6I9j9dMI3GrDY",
    },
  ],
  activeProduct: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ACTIVE":
      if (state.activeProduct === undefined)
        return { ...state, activeProduct: action.payload };
      if (state.activeProduct.id === action.payload.id)
        return { ...state, activeProduct: undefined };
      if (
        state.activeProduct !== action.payload &&
        state.activeProduct !== undefined
      )
        return { ...state, activeProduct: action.payload };
      else return;

    case "DELETE_PRODUCT":
      const index = state.productsList.findIndex(
        (product) => product.id === action.payload
      );
      let newList = [...state.productsList];
      newList.splice(index, 1);
      return { productsList: newList };

    case "SAVE_PRODUCT_EDIT":
      const editIndex = state.productsList.findIndex(
        (product) => product.id === action.payload.id
      );
      const editedProduct = {
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        img: action.payload.img,
      };
      let editedList = [...state.productsList];
      editedList.splice(editIndex, 1, editedProduct);
      return { productsList: editedList };

    case "ADD_PRODUCT":
      const newId = state.productsList[state.productsList.length - 1].id + 1;
      const newProduct = {
        id: newId,
        name: `Product ${newId}`,
        price: "Price",
        description: "Description",
        img: "",
      };
      let listWithNewItem = [...state.productsList, newProduct];
      return { productsList: listWithNewItem, activeProduct: newProduct };
    default:
      return state;
  }
};

export default reducer;
