import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "@/src/reducers";
import { MyCart } from "./interface";

interface MyCartState {
  items: MyCart[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MyCartState = {
  items: [],
  status: "nothing",
  error: null,
};

export const mycartSlice = createSlice({
  name: "mycart",
  initialState,
  reducers: {
    getItems(state) {
      state.status = "loading";
    },
    getItemsSuccess(state, action) {
      state.status = "succeeded";
      state.items = action.payload;
    },
    getItemsFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    removeItems: (state: Draft<MyCartState>, action: PayloadAction<string>) => {
      state.status = "loading";
    },
    removeItemsSuccess: (
      state: Draft<MyCartState>,
      action: PayloadAction<any>
    ) => {
      state.status = "succeeded";
      const removeItemsId = action.payload;
      state.items = [
        ...state.items.filter((item) => item._id !== removeItemsId._id),
      ];
    },
    removeItemsFailure: (
      state: Draft<MyCartState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getItems,
  getItemsSuccess,
  getItemsFailure,
  removeItems,
  removeItemsSuccess,
  removeItemsFailure,
} = mycartSlice.actions;

export const selectAllMyCarts = (state: RootState) => state.mycart.items;

export default mycartSlice.reducer;
