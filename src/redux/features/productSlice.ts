import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  stock: number;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCategories: string[];
  sortOption: "asc" | "desc";
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  searchTerm: "",
  selectedCategories: [],
  sortOption: "asc",
};

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: ProductsState }
>("products/fetchProducts", async () => {
  const response = await axios.get("/api/products");
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    toggleCategory(state, action: PayloadAction<string>) {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        state.selectedCategories.push(category);
      }
    },
    setSortOption(state, action: PayloadAction<"asc" | "desc">) {
      state.sortOption = action.payload;
    },
    clearFilters(state) {
      state.searchTerm = "";
      state.selectedCategories = [];
      state.sortOption = "asc";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { setSearchTerm, toggleCategory, setSortOption, clearFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
