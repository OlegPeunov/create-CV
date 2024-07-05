import { FormPersonalInfo } from './components/Forms/PersonalInfo/PersonalInfo.tsx';
import { FormEducation } from './components/Forms/Education/Education.tsx';
import { Header } from './components/Header/Header.tsx';
import * as S from './App.styled.ts';

export const App = () => {
  return (
    <S.StyledLayout>
      <Header />
      <FormPersonalInfo />
      <FormEducation />
    </S.StyledLayout>
  );
};
