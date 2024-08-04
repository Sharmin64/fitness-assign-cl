import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./features/productSlice";
import { baseApi } from "./api/baseApi";
export const store = configureStore({
  reducer: {
    // products: productReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
