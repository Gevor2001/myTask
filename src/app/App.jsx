import React from "react";
import { Provider } from "react-redux";

import { GlobalStyle } from "./globalStyle";
import { Routers } from "./Routers";
import { store } from "../store";

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routers />
    </Provider>
  );
};
