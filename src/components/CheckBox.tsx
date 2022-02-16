import React from 'react';

type CheckBoxType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  Readonly<{ label?: string }>;

export const CheckBox: React.FC<CheckBoxType> = ({ label, ...props }) => {
  return (
    <label>
      <input {...props} type="checkbox" />
      {label}
    </label>
  );
};
