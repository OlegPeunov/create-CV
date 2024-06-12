import FormPersonalInfo from './components/PersonalInfo/PersonalInfo.tsx';
import { Header } from './components/Header/Header.tsx';
import * as S from './App.styled.ts';

export function App() {
  return (
    <S.StyledLayout>
      <Header />
      <FormPersonalInfo />
    </S.StyledLayout>
  );
}
