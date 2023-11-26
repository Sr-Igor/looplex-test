import { Pagination as PgAnt } from 'antd';
import styled, { css } from 'styled-components';

export const Pagination = styled(PgAnt)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.xxxsmall};
    background-color: ${theme.colors.gray_50};
    padding: ${theme.spacings.xsmall};

    .ant-pagination-item {
      border-radius: ${theme.border.radius};
      border: none;
      color: ${theme.colors.white};
      transition: all 0.3s ease-in-out;
    }

    .ant-pagination-item-active {
      background-color: ${theme.colors.yellow_300};
      color: ${theme.colors.black};
    }

    .ant-pagination-item-active a {
      color: ${theme.colors.black};
    }

    .ant-pagination-item-active:focus,
    .ant-pagination-item-active:hover {
      border-color: ${theme.colors.yellow_300};
    }

    .ant-pagination-item:focus,
    .ant-pagination-item:hover {
      border-color: ${theme.colors.yellow_300};
    }

    .ant-pagination-item:focus a,
    .ant-pagination-item:hover a {
      color: ${theme.colors.black};
    }

    .ant-pagination-item:focus .ant-pagination-item-link,
    .ant-pagination-item:hover .ant-pagination-item-link {
      border-color: ${theme.colors.yellow_300};
    }

    .ant-pagination-item-active .ant-pagination-item-link {
      background-color: ${theme.colors.yellow_300};
      border-color: ${theme.colors.yellow_300};
    }

    .ant-pagination-item-link:focus,
    .ant-pagination-item-link:hover {
      border-color: ${theme.colors.yellow_300};
    }

    .ant-pagination-item-link:focus a,
    .ant-pagination-item-link:hover a {
      color: ${theme.colors.black};
    }
  `}
`;
