import { useState, useEffect } from 'react';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { ExperianceItem } from './ExperianceItem/ExperianceItem';
import { ExpType } from '../../types';

export const FormExperiance: React.FC = () => {
  // const [formCounter, setFormCounter] = useState<number>(1);
  // const handleRemove = (key: string) => {
  //   setExperianceForms(prevForms => prevForms.filter(form => form.key !== key));
  // };

  const [experianceForms, setExperianceForms] = useState<Array<ExpType>>([]);

  const handleAddForm = () => {
    setExperianceForms(prevForms => [
      ...prevForms,
      { id: new Date().toISOString(), deletable: experianceForms.length > 0 },
    ]);
  };

  useEffect(() => handleAddForm(), []);

  // const handleIncrease = () => {
  //   // setFormCounter(formCounter + 1);

  //   setExperianceItems([
  //     ...experianceItems,
  //     <ExperianceItem
  //       num={formCounter + 1}
  //       key={new Date().toISOString()}
  //       removeItem={handleRemove}
  //     />,
  //   ]);
  // };

  return (
    <Card title="Опыт работы">
      {experianceForms.map(el => (
        <ExperianceItem id={el.id} deletable={el.deletable} key={el.id} />
      ))}
      <Button text="Добавить еще" onAddForm={handleAddForm}></Button>
    </Card>
  );
};
