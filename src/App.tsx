import React from 'react';

import { Editor, Form, Header, Main } from './components';
import { FieldTypesType } from './types';

// Так как приложение маленькое и использует одно состояние и не требует шаблонных редьюсеров
// не вижу смысла выносить слой данных в какойнибудь redux, контекста хватит с головой
// redux overhead и добавит ничем не оправданный boilerplate
type FieldsContextType = Readonly<{
  form?: FieldTypesType;
  setForm?: React.Dispatch<React.SetStateAction<FieldTypesType>>;
}>;

export const FieldsContext = React.createContext<FieldsContextType>({});

const App: React.FC = () => {
  const [form, setForm] = React.useState<FieldTypesType>({
    submitText: 'Отправить',
    fields: [],
  });

  return (
    <FieldsContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      <div className="app">
        <div>
          <Header />
          <Main />
          <Editor />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </FieldsContext.Provider>
  );
};

export default App;
