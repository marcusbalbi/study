import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from "react-redux";
import commentsReducer from "./reducers/comments";

const AppContext = React.createContext(null);

// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(AppContext);
export const useDispatch = createDispatchHook(AppContext);
export const useSelector = createSelectorHook(AppContext);


export const createStore = (preloadedState) => {
  return configureStore({
  reducer: { comments: commentsReducer },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
})
};

export function AppReduxProvider({ children, store }) {
  const myStore = store || createStore();
  return (
    <Provider context={AppContext} store={myStore}>
      {children}
    </Provider>
  );
}
