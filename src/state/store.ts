import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../theme/themeSlice";
import { loadState, saveState } from "../utils/localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: { theme: themeReducer },
  preloadedState,
});
store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
