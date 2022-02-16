import { FieldTypeEnum } from '../constants';

export type FieldType<T extends keyof typeof FieldTypeEnum, S = unknown> = Readonly<{
  id: number;
  type: T;
  settings: S & {
    name: string;
    label: string;
    required: boolean;
  };
}>;
