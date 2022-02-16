import React from 'react';

import { FromRowItem, Select, TextField } from '../../../..';
import { FieldsContext } from '../../../../../App';
import { TextTypeEnum } from '../../../../../constants';
import { getHandlerUpdateField } from '../../../../../scripts';
import { TextType } from '../../../../../types';

import { Wrapper } from './Wrapper';

export const TextEditor: React.FC<TextType> = (props) => {
  const { setForm } = React.useContext(FieldsContext);

  const updateField = getHandlerUpdateField(setForm, props.id);

  const textTypeOptions = (Object.keys(TextTypeEnum) as Array<keyof typeof TextTypeEnum>).map((key) => (
    <option key={key} value={key}>
      {TextTypeEnum[key]}
    </option>
  ));

  return (
    <Wrapper {...props}>
      <FromRowItem title="Тип">
        <Select name="type" onChange={updateField}>
          {textTypeOptions}
        </Select>
      </FromRowItem>
      <FromRowItem title="Плейсхолдер">
        <TextField placeholder="Плейсхолдер" name="placeholder" onChange={updateField} />
      </FromRowItem>
    </Wrapper>
  );
};
