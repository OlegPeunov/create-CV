import * as S from './Skills.styled';
import { Card } from '../../Card/Card';
import { FormItem } from '../../FormItem/FormItem';
import { useAppDispatch } from '../../../hooks/redux';
import { skillsSlice } from '../../../store/reducers/SkillsSlice';

const selectOptions = [
  { value: 'View', label: 'View' },
  { value: 'Typescript', label: 'Typescript' },
  { value: 'Sass/Scss', label: 'Sass/Scss' },
  { value: 'Styled components', label: 'Styled components' },
  { value: 'Material UI', label: 'Material UI' },
  { value: 'Webpack', label: 'Webpack' },
  { value: 'Rest API', label: 'Rest API' },
  { value: 'Vite', label: 'Vite' },
  { value: 'Angular', label: 'Angular' },
  { value: 'React', label: 'React' },
];

export const FormSkills: React.FC = () => {
  const dispatch = useAppDispatch();
  const { addSkill, removeSkill, clearSkills } = skillsSlice.actions;

  const handleSelect = (value: string) => {
    dispatch(addSkill(value));
  };
  const handleDeselect = (value: string) => {
    dispatch(removeSkill(value));
  };
  const handleClear = () => {
    dispatch(clearSkills());
  };

  return (
    <Card title="Навыки">
      <FormItem title="Навыки">
        <S.select
          mode="tags"
          allowClear
          onSelect={handleSelect}
          onDeselect={handleDeselect}
          onClear={handleClear}
          placeholder="Выберите навыки"
          options={selectOptions}
        />
      </FormItem>
    </Card>
  );
};
