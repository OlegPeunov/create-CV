import { Card } from '../../Card/Card';
import { FormItem } from '../../FormItem/FormItem';
import { Input } from '../../Input/Input';
import { Button } from '../../Button/Button';
import { DatePicker } from 'antd';

export const FormExperiance: React.FC = () => {
  return (
    <Card title="Опыт работы">
      <FormItem title="Учреждение">
        <Input placeholder="Учреждение" />
      </FormItem>
      <FormItem title="Дата окончания">
        <DatePicker placeholder="Дата окончания" />
      </FormItem>
      <Button text="Добавить еще"></Button>
    </Card>
  );
};
