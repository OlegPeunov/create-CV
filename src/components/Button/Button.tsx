import { StyledButton } from './Button.styled';

export type ButtonProps = {
  text: string;
  onHandleIncrease: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onHandleIncrease }) => {
  return (
    <StyledButton type="primary" onClick={onHandleIncrease}>
      {text}
    </StyledButton>
  );
};
