import { customizeValidator } from '@rjsf/validator-ajv8';
import ptLocalizer from 'ajv-i18n/localize/pt-BR';

import { RJSFSchema } from '@rjsf/utils';

export const schema: RJSFSchema = {
  type: 'object',
  required: ['email', 'name', 'birthday'],
  properties: {
    avatar: { type: 'string', title: 'Avatar' },
    email: {
      type: 'string',
      title: 'Email do cliente',
      format: 'email',
      maxLength: 50,
      minLength: 5
    },
    name: { type: 'string', title: 'Nome Completo', minLength: 3 },
    birthday: { type: 'integer', title: 'Data de nascimento' }
  }
};

export const uiSchema = {
  avatar: {
    'ui:widget': 'fileField',
    'ui:placeholder': 'Avatar',
    'ui:classNames': 'avatar-field'
  },
  email: {
    'ui:widget': 'textField',
    'ui:options': {
      extra: 'Insira um email válido',
      icon: 'email'
    },

    'ui:inputProps': {
      placeholder: 'Email',
      inputMode: 'email'
    }
  },
  name: {
    'ui:widget': 'textField',
    'ui:options': {
      extra: 'Insira o nome do usuário',
      icon: 'user'
    },

    'ui:inputProps': {
      placeholder: 'Nome'
    }
  },
  birthday: {
    'ui:widget': 'dateField',
    'ui:inputProps': {
      placeholder: 'Data de nascimento',
      inputMode: 'date'
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validator = customizeValidator({}, ptLocalizer as any);
