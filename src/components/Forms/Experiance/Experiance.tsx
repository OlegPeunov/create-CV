import { useState, useEffect } from 'react';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { ExperianceItem } from './ExperianceItem/ExperianceItem';
import { ExpType } from '../../types';

export const FormExperiance: React.FC = () => {
  const [experianceForms, setExperianceForms] = useState<Array<ExpType>>([]);

  const handleAddForm = () => {
    setExperianceForms(prevForms => [
      ...prevForms,
      { id: new Date().toISOString(), deletable: experianceForms.length > 0 },
    ]);
  };

  const handleFormRemove = (id: string) => {
    setExperianceForms(prevForms => prevForms.filter(form => form.id !== id));
  };

  useEffect(() => handleAddForm(), []);

  return (
    <Card title="Опыт работы">
      {experianceForms.map(el => (
        <ExperianceItem
          id={el.id}
          deletable={el.deletable}
          key={el.id}
          onFormRemove={handleFormRemove}
        />
      ))}
      <Button text="Добавить еще" onAddForm={handleAddForm}></Button>
    </Card>
  );
};
