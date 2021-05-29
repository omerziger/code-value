import React from "react";

import { createStore } from "redux";
import reducer from "./redux/reducers/reducer";
import { Provider } from "react-redux";

import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import ProductsPanel from "./components/ProductsPanel/ProductsPanel";
import EditPanel from "./components/EditPanel/EditPanel";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={store}>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Nav />
        <Body>
          <ProductsPanel />
          <EditPanel />
        </Body>
      </div>
    </Provider>
  );
}
