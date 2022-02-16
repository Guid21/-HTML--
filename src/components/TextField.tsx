import React from 'react';

type TextFieldType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  Readonly<{ label?: string }>;

export const TextField: React.FC<TextFieldType> = ({ label, ...props }) => {
  return (
    <label>
      {label}
      <input {...props} />
    </label>
  );
};
