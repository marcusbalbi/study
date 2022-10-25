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


const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});

export function AppReduxProvider({ children }) {
  return (
    <Provider context={AppContext} store={store}>
      {children}
    </Provider>
  );
}
