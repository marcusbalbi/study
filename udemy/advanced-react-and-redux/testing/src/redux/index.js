import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from "react-redux";
import commentsReducer from "./reducers/comments";
import auth from "./reducers/auth";

const AppContext = React.createContext(null);

// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(AppContext);
export const useDispatch = createDispatchHook(AppContext);
export const useSelector = createSelectorHook(AppContext);

const logger = (store) => (next) => (action) => {
  console.log("store", store);
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const createStore = (preloadedState) => {
  return configureStore({
    reducer: { comments: commentsReducer, auth: auth },
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
};

export function AppReduxProvider({ children, store }) {
  const myStore = store || createStore();
  return (
    <Provider context={AppContext} store={myStore}>
      {children}
    </Provider>
  );
}
