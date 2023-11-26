import { DatePicker } from 'antd';
import styled, { css } from 'styled-components';

export const Field = styled(DatePicker)`
  ${({ theme }) => css`
    height: ${theme.spacings.large};
  `}
`;
