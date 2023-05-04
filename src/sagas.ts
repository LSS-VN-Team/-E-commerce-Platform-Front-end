import MyDashBoardSaga from "@/feature/dashboard/mydashboardSaga";
import loginSaga from "@/feature/login/loginSaga";
import MyCardSaga from "@/feature/mycart/mycartSaga";
import registerSaga from "@/feature/register/registerSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    MyCardSaga(),
    MyDashBoardSaga()
  ]);
}

export { rootSaga };
