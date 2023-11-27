import Image from 'next/image';

import { Button } from 'antd';
import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const RootModifier = {
  bottom: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray_900};
    border-radius: ${theme.border.xradius};
  `
};

export const Root = styled.header<{ pos: boolean }>`
  ${({ theme, pos }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    height: 100px;
    background-color: ${theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacings.small};
    position: fixed;
    top: 0;
    z-index: ${theme.layers.menu};
    transition: all 0.3s ease-in-out;
    ${pos && RootModifier.bottom(theme)};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    cursor: pointer;
  `}
`;

export const Logo = styled(Image).attrs({})`
  width: 80px;
  height: auto;

  ${media.lessThan('small')`
    width: 40px;

  `}
`;

export const Legend = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxxsmall};
    `}
  `}
`;

export const Avatar = styled.button`
  ${({ theme }) => css`
    height: 80px;
    display: flex;
    gap: ${theme.spacings.xsmall};
    align-items: center;
    border: none;
    background-color: transparent;

    &:hover {
      ${Legend} {
        color: ${theme.colors.yellow_300};
      }
    }

    &:disabled {
      cursor: default;
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.yellow_300};

    ${media.lessThan('small')`
      width: 20px;
      height: 20px;
    `}
  `}
`;

export const Letter = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray_900};
    transition: all 0.3s ease-in-out;
  `}
`;

export const User = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray_50};
    transition: all 0.3s ease-in-out;
  `}
`;

export const Action = styled(Button).attrs({
  type: 'link'
})`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};

    &:hover {
      color: ${theme.colors.yellow_300};
    }

    /* ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xxxsmall};
    `} */
  `}
`;

export const UserArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
  `}
`;
