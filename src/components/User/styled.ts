import { Button } from 'antd';
import styled, { css } from 'styled-components';

export const Root = styled.div`
  ${({ theme }) => css`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${theme.colors.gray_300};
    gap: ${theme.spacings.small};
    padding: 0px ${theme.spacings.small};
    position: relative;
    border-radius: ${theme.border.radius};
  `}
`;

export const ImageContent = styled.div`
  ${({ theme }) => css`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.yellow_300};
    border-radius: 50%;
    overflow: hidden;
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxxsmall};
    width: 200px;
  `}
`;

export const Email = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const Birthday = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;
  `}
`;

export const Letter = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
  `}
`;

export const Action = styled(Button).attrs({
  type: 'link'
})`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxxsmall};
  `}
`;
