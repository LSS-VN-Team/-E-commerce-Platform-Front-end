import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "@/src/reducers";
import { MyDashBoard } from "./interface";

interface MyDashBoardState {
  items: MyDashBoard[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MyDashBoardState = {
  items: [],
  status: "nothing",
  error: null,
};

export const mydashboardSlice = createSlice({
  name: "mydashboard",
  initialState,
  reducers: {
    getItemsDashBoard(state) {
      state.status = "loading";
    },
    getItemsDashBoardSuccess(state, action) {
      state.status = "succeeded";
      state.items = action.payload;
    },
    getItemsDashBoardFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    removeItemsDashBoard: (state: Draft<MyDashBoardState>, action: PayloadAction<string>) => {
      state.status = "loading";
    },
    removeItemsDashBoardSuccess: (
      state: Draft<MyDashBoardState>,
      action: PayloadAction<any>
    ) => {
      state.status = "succeeded";
      const removeItemsId = action.payload;
      state.items = [
        ...state.items.filter((item) => item._id !== removeItemsId._id),
      ];
    },
    removeItemsDashBoardFailure: (
      state: Draft<MyDashBoardState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getItemsDashBoard,
  getItemsDashBoardSuccess,
  getItemsDashBoardFailure,
  removeItemsDashBoard,
  removeItemsDashBoardSuccess,
  removeItemsDashBoardFailure,
} = mydashboardSlice.actions;

export const selectAllMyDashBoard = (state: RootState) => state.mydashboard.items;

export default mydashboardSlice.reducer;
