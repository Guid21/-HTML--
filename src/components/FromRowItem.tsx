import React from 'react';

type TextFieldType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  Readonly<{ title?: string }>;

export const FromRowItem: React.FC<TextFieldType> = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      <p>{title}</p>
      {children}
    </div>
  );
};
