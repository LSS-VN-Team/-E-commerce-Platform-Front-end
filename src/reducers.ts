import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../feature/login/loginSlice"
import registerReducer from "../feature/register/registerSlice"
const rootReducer = combineReducers({
    login:loginReducer,
    register: registerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
