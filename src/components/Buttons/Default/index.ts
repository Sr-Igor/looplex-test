import { Button as ButtonAnt } from 'antd';
import styled, { css } from 'styled-components';

export const Button = styled(ButtonAnt)`
  ${({ theme }) => css`
    width: 100%;
    height ${theme.spacings.large};:
`}
`;
