import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "@/src/reducers";
import { Chart, NewFeed, Product } from "./interface";

interface AdminState {
  chart: Chart[];
  newfeed: NewFeed[];
  product: Product[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AdminState = {
  chart: [],
  newfeed: [],
  product: [],
  status: "nothing",
  error: null,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getItemsChart(state) {
      state.status = "loading";
    },
    getItemsChartSuccess(state, action) {
      state.status = "succeeded";
      state.chart = action.payload;
    },
    getItemsChartFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    getItemsNewFeed(state) {
      state.status = "loading";
    },
    getItemsNewFeedSuccess(state, action) {
      state.status = "succeeded";
      state.newfeed = action.payload;
    },
    getItemsNewFeedFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    getItemsProduct(state) {
      state.status = "loading";
    },
    getItemsProductSuccess(state, action) {
      state.status = "succeeded";
      state.product = action.payload;
    },
    getItemsProductdFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getItemsChart,
  getItemsChartSuccess,
  getItemsChartFailure,
  getItemsNewFeed,
  getItemsNewFeedSuccess,
  getItemsNewFeedFailure,
  getItemsProduct,
  getItemsProductSuccess,
  getItemsProductdFailure,
} = adminSlice.actions;

export const selectAllChart = (state: RootState) => state.admin.chart;
export const selectAllNewFeed = (state: RootState) => state.admin.newfeed;
export const selectAllProduct = (state: RootState) => state.admin.product;


export default adminSlice.reducer;
