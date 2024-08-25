import { StyledTextArea } from './TextArea.styled';

interface TextAreaProps {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = props => {
  return (
    <StyledTextArea
      autoSize={{ minRows: 5, maxRows: 7 }}
      onChange={props.onChange}
    />
  );
};
