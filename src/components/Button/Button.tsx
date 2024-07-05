import { StyledButton } from './Button.styled';

export type ButtonType = {
  text: string;
};

export const Button: React.FC<ButtonType> = props => {
  return <StyledButton type="primary">{props.text}</StyledButton>;
};
