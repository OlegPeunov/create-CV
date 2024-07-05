import { FormPersonalInfo } from './components/Forms/PersonalInfo/PersonalInfo.tsx';
import { FormEducation } from './components/Forms/Education/Education.tsx';
import { FormSkills } from './components/Forms/Skills/Skills.tsx';
import { FormExperiance } from './components/Forms/Experiance/Experiance.tsx';
import { Header } from './components/Header/Header.tsx';
import * as S from './App.styled.ts';

export const App: React.FC = () => {
  return (
    <S.StyledLayout>
      <Header />
      <FormPersonalInfo />
      <FormEducation />
      <FormSkills />
      <FormExperiance />
    </S.StyledLayout>
  );
};
