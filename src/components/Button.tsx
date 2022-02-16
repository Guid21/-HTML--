import React from 'react';

type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC<ButtonType> = ({ ...props }) => {
  return <button {...props} />;
};
