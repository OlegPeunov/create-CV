import * as S from './ExperianceItem.styled';
import { FormItem } from '../../../FormItem/FormItem';
import { Input } from '../../../Input/Input';
import { TextArea } from '../../../TextArea/TextArea';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export const ExperianceItem: React.FC = () => {
  return (
    <S.Form>
      <FormItem title="Компания">
        <Input placeholder="Компания" />
      </FormItem>
      <FormItem title="Должность">
        <Input placeholder="Должность" />
      </FormItem>
      <FormItem title="Преиод работы">
        <RangePicker placeholder={['Начало', 'Конец']} />
      </FormItem>
      <FormItem title="Описание">
        <TextArea />
      </FormItem>
    </S.Form>
  );
};
