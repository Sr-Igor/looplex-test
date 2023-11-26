import Form from '@rjsf/core';
import { Button } from 'antd';
import styled, { css } from 'styled-components';

export const Root = styled(Form)`
  ${({ theme }) => css`
    #root {
      border: none;
    }

    .form-group {
      margin-bottom: ${theme.spacings.xsmall};
      flex-direction: column;
      display: flex;
      gap: ${theme.spacings.xxxsmall};
    }

    .avatar-field .control-label {
      display: none;
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Action = styled(Button).attrs({
  shape: 'round',
  type: 'primary'
})`
  ${({ theme }) => css`

  width: 100%;
  height ${theme.spacings.large};:
`}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    text-align: center;
    color: ${theme.colors.gray_300};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Errors = styled.div``;

export const Error = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.red_300};
    margin-bottom: ${theme.spacings.xxxsmall};
  `}
`;
