import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SkillsSliceState {
  skills: Array<string>;
}
const initialState: SkillsSliceState = {
  skills: [],
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState: initialState,
  reducers: {
    addSkill(state, action: PayloadAction<string>) {
      state.skills.push(action.payload);
    },
    removeSkill(state, action: PayloadAction<string>) {
      state.skills = state.skills.filter(skill => skill !== action.payload);
    },
    clearSkills(state) {
      state.skills = [];
    },
  },
});

export default skillsSlice.reducer;
