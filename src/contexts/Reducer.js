export const initialState = {
  productsList: [
    {
      id: 1,
      name: "Red Apple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "0.75",
      img: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png",
    },
    {
      id: 2,
      name: "Orange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "0.60",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Banana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "0.55",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
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
      else return state;

    case "DELETE_PRODUCT":
      const index = state.productsList.findIndex(
        (product) => product.id === action.payload
      );
      let newList = [...state.productsList];
      newList.splice(index, 1);
      return { ...state, productsList: newList };

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
      return { ...state, productsList: editedList };

    case "ADD_PRODUCT":
      const newId =
        state.productsList.length > 0
          ? state.productsList[state.productsList.length - 1].id + 1
          : state.productsList.length === 1
          ? 2
          : 1;
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
