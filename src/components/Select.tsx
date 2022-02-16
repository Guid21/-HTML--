import React from 'react';

type TextFieldType = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> &
  Readonly<{ label?: string }>;

export const Select: React.FC<TextFieldType> = ({ label, ...props }) => {
  return (
    <label>
      {label}
      <select {...props} />
    </label>
  );
};
