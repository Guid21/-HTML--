import { FieldTypesType } from '../types';

export const getHandlerUpdateField =
  (setForm?: React.Dispatch<React.SetStateAction<FieldTypesType>>, id?: number) =>
  (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>
    setForm?.((prev) => ({
      ...prev,
      fields: [
        ...prev.fields.map((field) => {
          if (field.id === id) {
            const type = event.target.type;

            switch (type) {
              case 'checkbox':
                return {
                  ...field,
                  settings: {
                    ...(field.settings as any),
                    [event.target.name]: (event as React.ChangeEvent<HTMLInputElement>).target.checked as boolean,
                  },
                };
              default:
                return {
                  ...field,
                  settings: {
                    ...(field.settings as any),
                    [event.target.name]: event.target.value,
                  },
                };
            }
          }
          return field;
        }),
      ],
    }));
