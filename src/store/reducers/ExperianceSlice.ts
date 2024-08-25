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
const jobItem: jobState = {
  company: '',
  position: '',
  period: {
    start: '',
    end: '',
  },
  description: '',
};

interface actionInputType {
  formNum: number;
  value: string;
}

const initialState: Array<jobState> = [jobItem];

export const experianceSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {
    setNewForm(state) {
      state.push(jobItem);
    },
    deleteForm(state, action: PayloadAction<number>) {
      state.splice(action.payload, 1);
    },
    setInputCompany(state, action: PayloadAction<actionInputType>) {
      state[action.payload.formNum].company = action.payload.value;
    },
    setInputPosition(state, action: PayloadAction<actionInputType>) {
      state[action.payload.formNum].position = action.payload.value;
    },
    setInputPeriod(
      state,
      action: PayloadAction<{
        formNum: number;
        value: { start: string; end: string };
      }>,
    ) {
      state[action.payload.formNum].period = action.payload.value;
    },
    setInputDescription(state, action: PayloadAction<actionInputType>) {
      state[action.payload.formNum].description = action.payload.value;
    },
  },
});

export default experianceSlice.reducer;
