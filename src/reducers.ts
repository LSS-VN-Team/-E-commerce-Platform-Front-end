import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../feature/login/loginSlice";
import registerReducer from "../feature/register/registerSlice";
import mycartReducer from "../feature/mycart/mycartSlide";
import mydashboardReducer from "../feature/dashboard/mydashboardSlide";
import adminReducer from "../feature/admin/adminSilde";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  mycart: mycartReducer,
  mydashboard: mydashboardReducer,
  admin: adminReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
