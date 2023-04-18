import loginSaga from "@/feature/login/loginSaga";
import registerSaga from "@/feature/register/registerSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga()
  ]);
}

export { rootSaga };
