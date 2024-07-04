import * as S from './Education.styled';
import { Card } from '../../Card/Card';
import { FormItem } from '../../FormItem/FormItem';
import { Input } from '../../Input/Input';
import { DatePicker } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const FormEducation = () => {
  return (
    <Card title="Образование">
      <FormItem title="Учреждение">
        <Input placeholder="Учреждение" />
      </FormItem>
      <FormItem title="Дата окончания">
        <DatePicker placeholder="Дата окончания" />
      </FormItem>
      <FormItem title="Степень">
        <S.select
          defaultValue="Бакалавр"
          onChange={handleChange}
          options={[
            { value: 'Бакалавр', label: 'Бакалавр' },
            { value: 'Магистратура', label: 'Магистратура' },
          ]}
        />
      </FormItem>
    </Card>
  );
};
