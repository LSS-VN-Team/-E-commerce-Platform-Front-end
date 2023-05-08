import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getItemsDashBoard,
  getItemsDashBoardSuccess,
  getItemsDashBoardFailure,
  removeItemsDashBoard,
  removeItemsDashBoardFailure,
  removeItemsDashBoardSuccess,
} from "./mydashboardSlide";
import { MyDashBoard } from "./interface";
import factories from "./factories";

function* handleGetItemsDashBoard() {
  yield takeEvery(
    getItemsDashBoard.type,
    function* (action: PayloadAction<MyDashBoard>) {
      try {
        const response: any = yield call(factories.getItem, action.payload);
        yield put(getItemsDashBoardSuccess(response.data.data));
      } catch (error: any) {
        yield put(getItemsDashBoardFailure(error.message));
      }
    }
  );
}
function* handleRemoveItems() {
  yield takeEvery(
    removeItemsDashBoard.type,
    function* (action: PayloadAction<string>) {
      try {
        const response: any = yield call(factories.removeItem, action.payload);
        yield put(removeItemsDashBoardSuccess(response.data.data));
      } catch (error: any) {
        yield put(removeItemsDashBoardFailure(error.message));
      }
    }
  );
}

export default function* MyDashBoardSaga() {
  yield fork(handleGetItemsDashBoard);
}
