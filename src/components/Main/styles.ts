import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    background-color: ${theme.colors.black};
    align-items: center;
    justify-content: center;
    padding-top: 100px;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    max-width: ${theme.grid.container};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray_900};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall} 0px
      ${theme.spacings.xsmall};
  `}
`;
