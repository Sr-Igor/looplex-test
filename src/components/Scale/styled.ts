import Image from 'next/image';

import { Button as ButtonAnt } from 'antd';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 800px;
  position: relative;
`;

export const Rectangle = styled.div<{ left: number }>`
  ${({ theme, left }) => css`
    background-color: ${theme.colors.yellow_300};
    height: 80px;
    width: 50%;
    margin-left: ${left * 10}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate3d(15, 90, 5, 45deg);
    position: absolute;
    opacity: 0;
    margin-left: 600px;
    border: 1px solid ${theme.colors.gray_50};
    border-radius: ${theme.border.xradius};
    transition: all 0.3s ease-in-out;

    &.slide {
      margin-left: ${left * 10}rem;
      opacity: 1;
    }

    &.drop {
      margin-bottom: -1000px;
      opacity: 0;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray_900};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray_50};
    text-align: center;
    width: 100%;
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.yellow_300};
    text-align: center;
    width: 100%;
    margin-bottom: 200px;
  `}
`;

export const Logo = styled(Image).attrs({
  width: 200
})`
  align-self: center;
  margin-bottom: 100px;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacings.small};
    transition: all 0.3s ease-in-out;
  `}
`;

export const Button = styled(ButtonAnt).attrs({
  shape: 'round',
  type: 'primary'
})`
  ${() => css`
    width: 20rem;
    height: 4rem;
  `}
`;

export const Headline = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    text-align: center;
    width: 100%;
    position: absolute;
    top: ${theme.spacings.medium};
  `}
`;

export const Information = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: ${theme.spacings.xxlarge};
  `}
`;
