import * as S from './styles';

type MainProps = {
  children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => (
  <S.Container>
    <S.Content>{children}</S.Content>
  </S.Container>
);
