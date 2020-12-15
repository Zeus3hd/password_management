import React from "react";
import { Provider } from "react-redux";
import Navigator from "./components/Navigator";
import store from "./redux/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
