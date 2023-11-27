import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Root = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.gray_900};
    border-radius: ${theme.border.radius};
  `};
`;

export const Section = styled.section<{ left: boolean }>`
  ${({ theme, left }) => css`
    height: auto;
    display: flex;
    width: 50%;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};
    align-self: ${left ? 'flex-start' : 'flex-end'};

    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`;

export const IconArea = styled.div`
  ${({ theme }) => css`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.yellow_300};
    border-radius: 50%;
  `}
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  flex: 1;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray_50};
    transition: all 0.3s ease-in-out;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray_50};
    transition: all 0.3s ease-in-out;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxxsmall};

    `}
  `}
`;
