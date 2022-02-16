import React from 'react';

import { AddButtons, FieldEditor, SubmitTextEditor } from './components';

export const Editor: React.FC = () => {
  return (
    <section>
      <h3>Добавить:</h3>
      <AddButtons />
      <SubmitTextEditor />
      <FieldEditor />
    </section>
  );
};
