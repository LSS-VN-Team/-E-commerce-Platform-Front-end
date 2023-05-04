import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getItems,
  getItemsSuccess,
  getItemsFailure,
  removeItems,
  removeItemsSuccess,
  removeItemsFailure,
} from "./mycartSlide";
import { MyCart } from "./interface";
import factories from "./factories";

function* handleGetItems() {
  yield takeEvery(getItems.type, function* (action: PayloadAction<MyCart>) {
    try {
      const response: any = yield call(factories.getItem, action.payload);
      yield put(getItemsSuccess(response.data.data));
    } catch (error: any) {
      yield put(getItemsFailure(error.message));
    }
  });
}
function* handleRemoveItems() {
  yield takeEvery(removeItems.type, function* (action: PayloadAction<string>) {
    try {
      const response: any = yield call(factories.removeItem, action.payload);
      yield put(removeItemsSuccess(response.data.data));
    } catch (error: any) {
      yield put(removeItemsFailure(error.message));
    }
  });
}

export default function* MyCardSaga() {
  yield fork(handleGetItems);
}
