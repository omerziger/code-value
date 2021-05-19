import React from "react";

import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import ProductsPanel from "./components/ProductsPanel/ProductsPanel";
import EditPanel from "./components/EditPanel/EditPanel";

import reducer, { initialState } from "./contexts/Reducer";
import { ProductsProvider } from "./contexts/ProductsProvider";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Nav />
      <ProductsProvider initialState={initialState} reducer={reducer}>
        <Body>
          <ProductsPanel />
          <EditPanel />
        </Body>
      </ProductsProvider>
    </div>
  );
}
