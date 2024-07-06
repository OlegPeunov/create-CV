import { StyledWorkplace, StyledText } from './Workplace.styled';

type WorkplaceType = {
  num: number;
};

export const Workplace: React.FC<WorkplaceType> = props => {
  return (
    <StyledWorkplace>
      <StyledText>Место работы - {props.num}</StyledText>
    </StyledWorkplace>
  );
};
