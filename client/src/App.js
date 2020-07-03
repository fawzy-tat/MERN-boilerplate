import React from "react";

//Redux
import { createStore } from "redux";
import allReducers from "../src/store/reducers";
import { Provider } from "react-redux";

//Routes handling
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
