import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getItemsChart,
  getItemsChartSuccess,
  getItemsChartFailure,
  getItemsNewFeed,
  getItemsNewFeedFailure,
  getItemsNewFeedSuccess,
  getItemsProduct,
  getItemsProductSuccess,
  getItemsProductdFailure,
} from "./adminSilde";
import { Chart, NewFeed, Product } from "./interface";
import factories from "./factories";

function* handleGetItemsChart() {
  yield takeEvery(getItemsChart.type, function* (action: PayloadAction<Chart>) {
    try {
      const response: any = yield call(factories.getItemChart, action.payload);
      yield put(getItemsChartSuccess(response.data.data));
    } catch (error: any) {
      yield put(getItemsChartFailure(error.message));
    }
  });
}
function* handleGetItemsNewFeed() {
  yield takeEvery(
    getItemsNewFeed.type,
    function* (action: PayloadAction<NewFeed>) {
      try {
        const response: any = yield call(
          factories.getItemNewFeed,
          action.payload
        );
        yield put(getItemsNewFeedSuccess(response.data.data));
      } catch (error: any) {
        yield put(getItemsNewFeedFailure(error.message));
      }
    }
  );
}
function* handleGetItemsProduct() {
  yield takeEvery(
    getItemsProduct.type,
    function* (action: PayloadAction<Product>) {
      try {
        const response: any = yield call(
          factories.getItemProduct,
          action.payload
        );
        yield put(getItemsProductSuccess(response.data.data));
      } catch (error: any) {
        yield put(getItemsProductdFailure(error.message));
      }
    }
  );
}

export default function* AdminSaga() {
  yield fork(handleGetItemsChart);
  yield fork(handleGetItemsNewFeed);
  yield fork(handleGetItemsProduct);
}
