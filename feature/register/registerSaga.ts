import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  Registers,
  RegistersSuccess,
  RegistersFailure,
} from "./registerSlice"
import { IRegister } from "@/interfaces";
import factories from "./factories";


function* handleRegister() {
  yield takeEvery(Registers.type, function* (action: PayloadAction<IRegister>) {
    try {
      const response: any = yield call(factories.Register, action.payload);
      yield put(RegistersSuccess(response.data));
    } catch (error: any) {
      yield put(RegistersFailure(error.message));
    }
  });
}

export default function* registerSaga() {
  yield fork(handleRegister);
}