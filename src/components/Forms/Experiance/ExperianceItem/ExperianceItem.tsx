import * as S from './ExperianceItem.styled';
import { FormItem } from '../../../FormItem/FormItem';
import { Input } from '../../../Input/Input';
import { Workplace } from '../../../Workplace/Workplace';
import { TextArea } from '../../../TextArea/TextArea';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

type ItemType = {
  id: string;
  deletable: boolean;
};

export const ExperianceItem: React.FC<ItemType> = ({ id, deletable }) => {
  return (
    <S.Form>
      <Workplace id={id} deletable={deletable} />
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
