import { useState } from 'react';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { ExperianceItem } from './ExperianceItem/ExperianceItem';
import { ExpType } from '../../../types/types';
import { useAppDispatch } from '../../../hooks/redux';
import { experianceSlice } from '../../../store/reducers/ExperianceSlice';

export const FormExperiance: React.FC = () => {
  const [experianceForms, setExperianceForms] = useState<Array<ExpType>>([
    { id: new Date().toISOString(), deletable: false },
  ]);

  const { setNewForm, deleteForm } = experianceSlice.actions;
  const dispatch = useAppDispatch();

  const handleAddForm = () => {
    dispatch(setNewForm());

    setExperianceForms(prevForms => [
      ...prevForms,
      { id: new Date().toISOString(), deletable: experianceForms.length > 0 },
    ]);
  };

  const handleFormRemove = (id: string, index: number) => {
    dispatch(deleteForm(index));
    setExperianceForms(prevForms => prevForms.filter(form => form.id !== id));
  };

  return (
    <Card title="Опыт работы">
      {experianceForms.map((el, i) => (
        <ExperianceItem
          id={el.id}
          deletable={el.deletable}
          key={el.id}
          num={i}
          onFormRemove={handleFormRemove}
        />
      ))}
      <Button text="Добавить еще" onClick={handleAddForm}></Button>
    </Card>
  );
};
