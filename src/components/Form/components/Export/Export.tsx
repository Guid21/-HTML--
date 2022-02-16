/* eslint-disable functional/no-let */
import React from 'react';

import { download } from '../../../../scripts';
import { Button } from '../../../Button';

type ExportPropsType = Readonly<{ formRef: React.RefObject<HTMLFormElement> }>;

export const Export: React.FC<ExportPropsType> = ({ formRef }) => {
  const [cssFile, setCssFile] = React.useState('');

  React.useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/form.css`)
      .then((response) => response.text())
      .then(setCssFile);
  }, [setCssFile]);

  const handlerExport = () => {
    const formHtml = formRef.current?.innerHTML;

    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style type="text/css">
                    ${cssFile}
                </style>
            </head>
            <body>
                <form>
                    ${formHtml}
                </form>
            </body>
        </html>
    `;

    download('index.html', html);
  };

  return (
    <Button className="export" onClick={handlerExport}>
      Экспорт
    </Button>
  );
};
