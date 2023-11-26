import { format } from 'date-fns';
import dayjs from 'dayjs';

import { WidgetProps } from '@rjsf/utils';

import * as S from './styled';

export const Date = (rest: WidgetProps) => {
  const props = rest.uiSchema?.['ui:inputProps'];
  const initialValue = rest.value
    ? format(rest.value, 'dd/MM/yyyy')
    : undefined;

  return (
    <>
      <S.Field
        {...props}
        defaultValue={initialValue && dayjs(initialValue, 'DD/MM/YYYY')}
        format={'DD/MM/YYYY'}
        onChange={(e) => rest.onChange(e)}
        status={rest.rawErrors ? 'error' : undefined}
      />
    </>
  );
};
