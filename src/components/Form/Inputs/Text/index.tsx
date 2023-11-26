import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

import { WidgetProps } from '@rjsf/utils';

import { icons, IconType } from '../icons';
import * as S from './styled';

export const Text = (rest?: WidgetProps) => {
  const icon = (rest?.options?.icon || 'user') as IconType;
  const prefix = icons[icon] || <></>;
  const props = rest?.uiSchema?.['ui:inputProps'];

  return (
    <S.Field
      prefix={prefix}
      suffix={
        rest?.options?.extra && (
          <Tooltip title={rest.options.extra as string}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        )
      }
      placeholder={rest?.placeholder}
      {...props}
      value={rest?.value}
      onChange={(e) => rest?.onChange(e.target.value)}
      status={rest?.rawErrors ? 'error' : undefined}
    />
  );
};
