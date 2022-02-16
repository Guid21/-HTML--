import React from 'react';

import { FieldsContext } from '../../../App';
import { FieldTypeEnum } from '../../../constants';
import { FieldsType } from '../../../types';
import { Button } from '../../Button';

export const AddButtons: React.FC = () => {
  const { setForm } = React.useContext(FieldsContext);

  const handlerAddField = (field: FieldsType) => {
    setForm?.((prev) => ({
      ...prev,
      fields: [...prev.fields, field],
    }));
  };

  const addText = () =>
    handlerAddField({
      id: new Date().valueOf(),
      type: 'text',
      settings: {
        type: 'text',
        placeholder: '',
        name: '',
        label: '',
        required: false,
      },
    });

  const addSelect = () =>
    handlerAddField({
      id: new Date().valueOf(),
      type: 'select',
      settings: {
        options: [[new Date().valueOf(), 'value', 'text']],
        name: '',
        label: '',
        required: false,
      },
    });

  const addCheckBox = () =>
    handlerAddField({
      id: new Date().valueOf(),
      type: 'checkBox',
      settings: {
        name: '',
        label: '',
        required: false,
      },
    });

  return (
    <div>
      <Button onClick={addText}>{FieldTypeEnum.text}</Button>
      <Button onClick={addSelect}>{FieldTypeEnum.select}</Button>
      <Button onClick={addCheckBox}>{FieldTypeEnum.checkBox}</Button>
    </div>
  );
};
