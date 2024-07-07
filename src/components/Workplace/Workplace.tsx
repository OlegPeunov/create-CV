import { StyledWorkplace, StyledText, StyledDel } from './Workplace.styled';

type WorkplaceType = {
  id: string;
  deletable: boolean;
  onFormRemove: (id: string) => void;
};

export const Workplace: React.FC<WorkplaceType> = ({
  id,
  deletable,
  onFormRemove,
}) => {
  return (
    <StyledWorkplace>
      <StyledText>Место работы</StyledText>
      {deletable ? (
        <StyledDel onClick={() => onFormRemove(id)}>&times;</StyledDel>
      ) : (
        ''
      )}
    </StyledWorkplace>
  );
};
