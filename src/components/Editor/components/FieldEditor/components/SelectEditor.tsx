import React from 'react';

import { FromRowItem, TextField } from '../../../..';
import { FieldsContext } from '../../../../../App';
import { OptionType, SelectType } from '../../../../../types';
import { Button } from '../../../../Button';

import { Wrapper } from './Wrapper';

export const SelectEditor: React.FC<SelectType> = (props) => {
  const { setForm } = React.useContext(FieldsContext);

  const addOptionSelect = () => {
    setForm?.((prev) => ({
      ...prev,
      fields: [
        ...prev.fields.map((field) => {
          if (field.id === props.id) {
            return {
              ...field,
              settings: {
                ...(field.settings as any),
                options: [...(field as SelectType).settings?.options, [new Date().valueOf(), 'value', 'text']],
              },
            };
          }
          return field;
        }),
      ],
    }));
  };

  const editOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [name, id] = event.target.name.split('-');

    setForm?.((prev) => ({
      ...prev,
      fields: [
        ...prev.fields.map((field) => {
          const options = (field as SelectType).settings.options?.map((option) => {
            if (option[0] === +id && name === 'value') {
              return [option[0], event.target.value, option[2]];
            }
            if (option[0] === +id && name === 'children') {
              return [option[0], option[1], event.target.value];
            }
            return [...option];
          }) as OptionType[];

          return {
            ...field,
            settings: {
              ...(field.settings as any),
              options,
            },
          };
        }),
      ],
    }));
  };

  const deleteOptionSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    setForm?.((prev) => ({
      ...prev,
      fields: [
        ...prev.fields.map((field) => {
          const options = (field as SelectType).settings.options?.filter(
            (option) => option[0] !== +(event.target as any).name,
          ) as OptionType[];

          return {
            ...field,
            settings: {
              ...(field.settings as any),
              options,
            },
          };
        }),
      ],
    }));
  };

  return (
    <Wrapper {...props}>
      <Button onClick={addOptionSelect}>Добавить ключ значение</Button>
      {props.settings.options.map(([key, value, children], index) => (
        <FromRowItem key={key} title={`Опция №${index + 1}`}>
          <TextField name={`value-${key}`} defaultValue={value} onChange={editOptionSelect} />
          <TextField name={`children-${key}`} defaultValue={children} onChange={editOptionSelect} />
          <Button name={key.toString()} onClick={deleteOptionSelect} className="btn-delete">
            Удалить
          </Button>
        </FromRowItem>
      ))}
    </Wrapper>
  );
};
