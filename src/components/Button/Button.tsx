import { StyledButton } from './Button.styled';

export type ButtonProps = {
  text: string;
  onAddForm: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onAddForm }) => {
  return (
    <StyledButton type="primary" onClick={onAddForm}>
      {text}
    </StyledButton>
  );
};
