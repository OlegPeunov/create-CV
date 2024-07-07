import { StyledWorkplace, StyledText, StyledDel } from './Workplace.styled';

type WorkplaceType = {
  id: string;
  deletable: boolean;
};

export const Workplace: React.FC<WorkplaceType> = ({ id, deletable }) => {
  return (
    <StyledWorkplace>
      <StyledText>Место работы - {id}</StyledText>
      {deletable ? <StyledDel>&times;</StyledDel> : ''}
    </StyledWorkplace>
  );
};
