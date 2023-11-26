import { Collapse } from '@mui/material';
import { Button } from 'antd';
import styled, { css } from 'styled-components';

export const Root = styled.div``;

export const Title = styled.h2``;

export const Options = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xsmall};
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Auth = styled(Button).attrs({
  shape: 'round',
  type: 'primary'
})`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.large};
    background: #000;
    border: 1px solid #fff;
    color: #fff;
    font-weight: bold;
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    transition: all 0.3s ease-in-out;
  `}
`;

export const NoAuth = styled(Button).attrs({
  shape: 'round',
  type: 'link'
})`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.large};
    background: transparent;
    border: none;
    color: ${theme.colors.purple_100};
    font-weight: bold;
    font-size: ${theme.font.sizes.xxsmall};
    border-radius: ${theme.border.radius};
    transition: all 0.3s ease-in-out;
    box-shadow: none;
  `}
`;

export const Collapsible = styled(Collapse)`
  ${({ theme }) => css`
    .collapse-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: ${theme.spacings.xsmall};
    }
  `}
`;

export const Enter = styled(Button).attrs({
  shape: 'round',
  type: 'primary'
})`
  ${({ theme }) => css`
    font-weight: bold;
    height: ${theme.spacings.large};
    background: ${theme.colors.yellow_300};
    color: ${theme.colors.gray_900};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`;
