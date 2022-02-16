import { FieldType, OptionType } from '.';

export type SelectType = FieldType<
  'select',
  {
    options: OptionType[];
  }
>;
