import { StyledInput } from './Input.styled';

export type InputType = {
  [x: string]: any;
  placeholder: string;
};

export const Input: React.FC<InputType> = props => {
  return (
    <StyledInput
      placeholder={props.placeholder}
      onChange={e => props.handleOnChange(e)}
    />
  );
};
