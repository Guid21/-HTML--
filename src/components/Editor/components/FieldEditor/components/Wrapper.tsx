import React from 'react';

import { FromRowItem } from '../../../..';
import { FieldsContext } from '../../../../../App';
import { FieldTypeEnum } from '../../../../../constants';
import { getHandlerUpdateField } from '../../../../../scripts';
import { FieldsType } from '../../../../../types';
import { Button } from '../../../../Button';
import { CheckBox } from '../../../../CheckBox';
import { TextField } from '../../../../TextField';

type WrapperPropsType = FieldsType & Readonly<{ className?: string }>;

export const Wrapper: React.FC<WrapperPropsType> = ({
  type,
  children,
  className,
  id,
  settings: { name, required, label },
}) => {
  const { setForm } = React.useContext(FieldsContext);

  const deleteField = () =>
    setForm?.((prev) => ({ ...prev, fields: [...prev.fields.filter((field) => id !== field.id)] }));
  const updateField = getHandlerUpdateField(setForm, id);

  return (
    <div className={`card ${className}`}>
      <h4>{FieldTypeEnum[type]}</h4>

      <FromRowItem title="Лейбл">
        <TextField placeholder="Лейбл" name="label" onChange={updateField} />
      </FromRowItem>
      <FromRowItem title="Имя">
        <TextField placeholder="Имя" name="name" onChange={updateField} />
      </FromRowItem>
      <FromRowItem title="Обязательное поле">
        <CheckBox name="required" onChange={updateField} />
      </FromRowItem>
      {children}

      <Button onClick={deleteField} className="btn-delete">
        Удалить
      </Button>
    </div>
  );
};
