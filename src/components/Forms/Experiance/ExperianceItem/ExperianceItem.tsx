import * as S from './ExperianceItem.styled';
import { experianceSlice } from '../../../../store/reducers/ExperianceSlice';
import { useAppDispatch } from '../../../../hooks/redux';
import { FormItem } from '../../../FormItem/FormItem';
import { Input } from '../../../Input/Input';
import { DeleteOutlined } from '@ant-design/icons';
import { ChangeEvent } from 'react';
import { TextArea } from '../../../TextArea/TextArea';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { NoUndefinedRangeValueType } from 'rc-picker/lib/PickerInput/RangePicker';

const { RangePicker } = DatePicker;

type ItemType = {
  id: string;
  deletable: boolean;
  num: number;
  onFormRemove: (id: string) => void;
};

export const ExperianceItem: React.FC<ItemType> = ({
  id,
  deletable,
  num,
  onFormRemove,
}) => {
  const {
    setInputCompany,
    setInputPosition,
    setInputDescription,
    setInputPeriod,
  } = experianceSlice.actions;
  const dispatch = useAppDispatch();

  const handleChangeCompany = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputCompany(event.target.value));
  };
  const handleChangePosition = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputPosition(event.target.value));
  };
  const handleChangeDescription = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setInputDescription(event.target.value));
  };
  const handleChangeRange = (date: NoUndefinedRangeValueType<Dayjs>) => {
    dispatch(
      setInputPeriod({
        start: `${dayjs(date[0]).format('DD.MM.YYYY')}`,
        end: `${dayjs(date[1]).format('DD.MM.YYYY')}`,
      }),
    );
  };

  return (
    <S.Form>
      <S.StyledWorkplace>
        <S.StyledText>Место работы - {num}</S.StyledText>
        {deletable ? <DeleteOutlined onClick={() => onFormRemove(id)} /> : ''}
      </S.StyledWorkplace>
      <FormItem title="Компания">
        <Input placeholder="Компания" onChange={handleChangeCompany} />
      </FormItem>
      <FormItem title="Должность">
        <Input placeholder="Должность" onChange={handleChangePosition} />
      </FormItem>
      <FormItem title="Преиод работы">
        <RangePicker
          placeholder={['Начало', 'Конец']}
          onChange={date => handleChangeRange(date!)}
        />
      </FormItem>
      <FormItem title="Описание">
        <TextArea onChange={handleChangeDescription} />
      </FormItem>
    </S.Form>
  );
};
