import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { photosApi } from "./api/photosApi.js";
import categoryReducer from "./features/categorySlice";
import paginationReducer from "./features/paginationSlice.js";
import sortingReducer from "./features/sortingSlice.js";

// configuring the Redux store
const store = configureStore({
  // combining all the reducers from different slices
  reducer: {
    category: categoryReducer,
    [photosApi.reducerPath]: photosApi.reducer,
    pagination: paginationReducer,
    sort: sortingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photosApi.middleware),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <App />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
