import { useState } from 'react';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { ExperianceItem } from './ExperianceItem/ExperianceItem';

export const FormExperiance: React.FC = () => {
  const [formCounter, setFormCounter] = useState<number>(1);
  const [experianceItems, setExperianceItems] = useState([
    <ExperianceItem num={1} />,
  ]);

  const handleIncrease = () => {
    setFormCounter(formCounter + 1);

    setExperianceItems([
      ...experianceItems,
      <ExperianceItem num={formCounter + 1} />,
    ]);
  };

  return (
    <Card title="Опыт работы">
      {experianceItems}
      <Button text="Добавить еще" onHandleIncrease={handleIncrease}></Button>
    </Card>
  );
};
