import { Input } from 'antd';
import styled, { css } from 'styled-components';

export const Field = styled(Input)`
  ${({ theme }) => css`
    height: ${theme.spacings.large};
  `}
`;
