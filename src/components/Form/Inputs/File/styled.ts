import { Upload } from 'antd';
import styled from 'styled-components';

export const Root = styled(Upload)`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
