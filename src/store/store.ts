import { combineReducers, configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from './reducers/PersonalInfoSlice';
import educationReducer from './reducers/EducationSlice';
import skillsReducer from './reducers/SkillsSlice';
import experianceSlice from './reducers/ExperianceSlice';

const rootReducer = combineReducers({
  personalInfoReducer,
  educationReducer,
  skillsReducer,
  experianceSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
