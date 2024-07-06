import { useState } from 'react';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { ExperianceItem } from './ExperianceItem/ExperianceItem';

export const FormExperiance: React.FC = () => {
  const [experianceItems, setExperianceItems] = useState([<ExperianceItem />]);

  const handleIncrease = () => {
    setExperianceItems([...experianceItems, <ExperianceItem />]);
  };

  return (
    <Card title="Опыт работы">
      {experianceItems}
      <Button text="Добавить еще" onHandleIncrease={handleIncrease}></Button>
    </Card>
  );
};
