import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "@/src/reducers";
import { IRegister } from "@/interfaces";

interface registerState {
  registers: IRegister[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: registerState = {
  registers: [],
  status: "nothing",
  error: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
   
    Registers: (state: Draft<registerState>, action: PayloadAction<IRegister>) => {
      state.status = "loading";
    },
    RegistersSuccess: (state: Draft<registerState>, action: PayloadAction<IRegister>) => {
      state.status = "succeeded";
      state.registers.push(action.payload);
      // debugger
    },
    RegistersFailure: (
      state: Draft<registerState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    
  },
});

export const {
  Registers,
  RegistersSuccess,
  RegistersFailure,
} = registerSlice.actions;

export const selectAllUser = (state: RootState) => state.register.registers;

export default registerSlice.reducer;