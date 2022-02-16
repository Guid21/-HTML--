import { TextTypeEnum } from '../constants';

import { FieldType } from '.';

export type TextType = FieldType<
  'text',
  {
    type: keyof typeof TextTypeEnum;
    placeholder: string;
  }
>;
