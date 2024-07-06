import { useState } from 'react';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';

export const FormExperiance: React.FC = () => {
  const [formCounter, setFormCounter] = useState<number>(1);

  const handleIncrease = () => {
    setFormCounter(formCounter + 1);
  };

  return (
    <Card title="Опыт работы">
      <Button text="Добавить еще" onHandleIncrease={handleIncrease}></Button>
    </Card>
  );
};
