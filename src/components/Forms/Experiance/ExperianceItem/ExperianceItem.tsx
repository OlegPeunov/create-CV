import * as S from './ExperianceItem.styled';
import { FormItem } from '../../../FormItem/FormItem';
import { Input } from '../../../Input/Input';
import { Workplace } from '../../../Workplace/Workplace';
import { TextArea } from '../../../TextArea/TextArea';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

type ItemType = {
  num: number;
};

export const ExperianceItem: React.FC<ItemType> = ({ num }) => {
  return (
    <S.Form>
      <Workplace num={num} />
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
