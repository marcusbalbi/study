import React from "react";
import { Provider } from "react-redux";
import SongsList from "./components/SongsList";
import store from "./store";
console.log(store.getState());
const App = () => {
  return (
    <Provider store={store}>
      <SongsList />
    </Provider>
  );
};

export default App;
