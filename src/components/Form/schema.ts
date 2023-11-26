import { customizeValidator } from '@rjsf/validator-ajv8';
import ptLocalizer from 'ajv-i18n/localize/pt-BR';

import { RegistryWidgetsType } from '@rjsf/utils';

import { Date } from './Inputs/Date';
import { File } from './Inputs/File';
import { Text } from './Inputs/Text';

export const widgets: RegistryWidgetsType = {
  textField: Text,
  dateField: Date,
  fileField: File
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validator = customizeValidator({}, ptLocalizer as any);
