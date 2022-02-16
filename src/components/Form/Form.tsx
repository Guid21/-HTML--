/* eslint-disable functional/no-let */
import React from 'react';

import { CheckBox, Select, TextField } from '..';
import { FieldsContext } from '../../App';
import { SelectType } from '../../types';

import { Export } from './components';

export const Form: React.FC = () => {
  const { form } = React.useContext(FieldsContext);

  const formRef = React.useRef<HTMLFormElement>(null);

  const fields = form?.fields?.map(({ type, id, settings }) => {
    switch (type) {
      case 'text':
        return <TextField {...settings} key={id} />;
      case 'select':
        const { options, ...selectProps } = settings as SelectType['settings'];
        return (
          <Select {...selectProps} key={id}>
            {options.map(([key, value, children]) => (
              <option key={key} value={value} children={children} />
            ))}
          </Select>
        );
      case 'checkBox':
        return <CheckBox {...settings} key={id} />;
      default:
        return null;
    }
  });

  return (
    <section className="form">
      <h2>Форма</h2>

      <Export formRef={formRef} />
      <div>
        <form id="form" ref={formRef}>
          {fields}
          <TextField type="submit" value={form?.submitText} />
        </form>
      </div>
    </section>
  );
};
