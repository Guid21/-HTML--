import React from 'react';

import { FieldsContext } from '../../../../App';

import { CheckBoxEditor } from './components/CheckBoxEditor';
import { SelectEditor } from './components/SelectEditor';
import { TextEditor } from './components/TextEditor';

export const FieldEditor: React.FC = () => {
  const { form } = React.useContext(FieldsContext);

  const fieldEditor = form?.fields.map((field) => {
    const { type, id } = field;

    switch (type) {
      case 'text':
        return <TextEditor {...field} key={id} />;
      case 'checkBox':
        return <CheckBoxEditor {...field} key={id} />;
      case 'select':
        return <SelectEditor {...field} key={id} />;
      default:
        return (
          <div key={id} className="card">
            ничего не найдено
          </div>
        );
    }
  });

  return <div className="field-editor">{fieldEditor}</div>;
};
