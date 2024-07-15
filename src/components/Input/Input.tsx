import { StyledInput } from './Input.styled';
import { useAppDispatch } from '../../hooks/redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export type InputType = {
  placeholder: string;
  action: ActionCreatorWithPayload<string>;
};

export const Input: React.FC<InputType> = props => {
  const dispatch = useAppDispatch();

  return (
    <StyledInput
      placeholder={props.placeholder}
      onChange={(value: string) => dispatch(props.action(value))}
    />
  );
};
