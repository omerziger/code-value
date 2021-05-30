const intialState = {
  productsList: [
    {
      id: 1,
      name: "Red Apple",
      description: "borem maximum.",
      price: "0.75",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrjbvx-b5078bbf-03ff-4625-b214-35c3f9fefc4c.png/v1/fill/w_900,h_900,strp/red_apple_on_a_transparent_background__by_prussiaart_dcrjbvx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY3JqYnZ4LWI1MDc4YmJmLTAzZmYtNDYyNS1iMjE0LTM1YzNmOWZlZmM0Yy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Y0-7z3OBNt3CbKeZrPiWJFD-4LhVF7I9iC2wADeZEAU",
    },
    {
      id: 2,
      name: "Orange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "0.60",
      img: "https://lh3.googleusercontent.com/proxy/6erTUsdqsfXTxpr_ovKUd5zClqJ7vVLoDPEbOm9QvRVpPFwZLpvR7L0O1zsKj0c9b8dLrQemgKCD4DZUK4gODxemTmN9458PkJOConMvVkP5FzlHlvHwbR9UGA",
    },
    {
      id: 3,
      name: "Banana",
      description: "borem minimum.",
      price: "0.55",
      img: "https://australianbananas.com.au/Images/Home/RipenessBlend.png",
    },
  ],
  activeProduct: undefined,
};

const reducer = (state = intialState, action) => {
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
