import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray_50};
    transition: all 0.3s ease-in-out;
    text-align: center;
  `}
`;
