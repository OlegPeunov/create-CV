import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface jobState {
  company: string;
  position: string;
  period: {
    start: string;
    end: string;
  };
  description: string;
}
const initialState: jobState = {
  company: '',
  position: '',
  period: {
    start: '',
    end: '',
  },
  description: '',
};

export const experianceSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {
    setInputCompany(state, action: PayloadAction<string>) {
      state.company = action.payload;
    },
    setInputPosition(state, action: PayloadAction<string>) {
      state.position = action.payload;
    },
    setInputPeriod(
      state,
      action: PayloadAction<{ start: string; end: string }>,
    ) {
      state.period = action.payload;
    },
    setInputDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
  },
});

export default experianceSlice.reducer;
