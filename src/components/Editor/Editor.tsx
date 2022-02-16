import React from 'react';

import { FromRowItem, TextField } from '..';
import { FieldsContext } from '../../App';

import { AddButtons, FieldEditor } from './components';

export const Editor: React.FC = () => {
  const { form, setForm } = React.useContext(FieldsContext);

  const editSubmitText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm?.((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section>
      <h3>Добавить:</h3>
      <AddButtons />
      <FromRowItem title="Текст на кнопке Сабмит">
        <TextField
          placeholder="Текст на кнопке Сабмит"
          name="submitText"
          defaultValue={form?.submitText}
          onChange={editSubmitText}
        />
      </FromRowItem>
      <FieldEditor />
    </section>
  );
};
