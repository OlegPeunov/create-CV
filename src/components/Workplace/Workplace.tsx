import { StyledWorkplace, StyledText, StyledDel } from './Workplace.styled';

type WorkplaceType = {
  id: string;
  deletable: boolean;
  num: number;
  onFormRemove: (id: string) => void;
};

export const Workplace: React.FC<WorkplaceType> = ({
  id,
  deletable,
  num,
  onFormRemove,
}) => {
  return (
    <StyledWorkplace>
      <StyledText>Место работы - {num}</StyledText>
      {deletable ? (
        <StyledDel onClick={() => onFormRemove(id)}>&times;</StyledDel>
      ) : (
        ''
      )}
    </StyledWorkplace>
  );
};
