import * as S from './PersonalInfo.styled';
import { Card } from '../../Card/Card';
import { FormItem } from '../../FormItem/FormItem';
import { Input } from '../../Input/Input';
import { Upload, DatePicker } from 'antd';
import { useState } from 'react';
import type { GetProp, UploadProps } from 'antd';
import { personalInfoSlice } from '../../../store/reducers/PersonalInfoSlice';
import { useAppDispatch } from '../../../hooks/redux';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const FormPersonalInfo: React.FC = () => {
  const {
    setInputName,
    setInputLocation,
    setInputPhone,
    setBirthday,
    setAvatar,
  } = personalInfoSlice.actions;
  const [previewImage, setPreviewImage] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChange: UploadProps['onChange'] = async info => {
    getBase64(info.file as FileType, url => {
      setPreviewImage(url);
      dispatch(setAvatar(url));
    });
  };

  const uploadButton = (
    <S.ButtonUpload type="button">
      {previewImage === '' ? (
        <S.ButtonText>Выберите ваш аватар</S.ButtonText>
      ) : (
        <S.AvatarPreview src={previewImage} alt="your avatar" />
      )}
    </S.ButtonUpload>
  );

  return (
    <Card title="Персональная информация">
      <FormItem title="ФИО">
        <Input
          placeholder="ФИО"
          handleOnChange={(value: string) => dispatch(setInputName(value))}
        />
      </FormItem>
      <FormItem title="Место жительства">
        <Input
          placeholder="Место жительства"
          handleOnChange={(value: string) => dispatch(setInputLocation(value))}
        />
      </FormItem>
      <FormItem title="Номер телефона">
        <Input
          placeholder="Номер телефона"
          handleOnChange={(value: string) => dispatch(setInputPhone(value))}
        />
      </FormItem>
      <FormItem title="Дата рождения">
        <DatePicker
          placeholder="День рождения"
          onChange={(value: string) => dispatch(setBirthday(String(value)))}
        />
      </FormItem>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={() => false}
        onChange={handleChange}
      >
        {uploadButton}
      </Upload>
    </Card>
  );
};


