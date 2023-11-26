import Link from 'next/link';

import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    background-color: ${theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
  `}
`;

export const Anchor = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    margin-left: ${theme.spacings.xxxsmall};
    transition: all 0.15s ease-in-out;

    &:hover {
      text-decoration: underline;
      color: ${theme.colors.purple_300};
    }
  `}
`;
