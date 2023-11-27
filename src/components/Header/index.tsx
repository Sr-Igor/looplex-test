import { signOut, useSession } from 'next-auth/react';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

import { LogoutOutlined, BookOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';

import * as S from './styled';

export interface HeaderProps {
  onPressLogin: () => void;
  schema: {
    logo: StaticImageData;
    title: string;
    do_login: string;
    panel: string;
  };
}

export const Header = ({ onPressLogin, schema }: HeaderProps) => {
  const { data: session } = useSession();

  const { push } = useRouter();

  const [windowPos, setWindowPos] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setWindowPos(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Root pos={!!windowPos}>
      <S.Content onClick={() => push('/')}>
        <S.Logo src={schema.logo} alt="Logo" />
        <S.Legend>{schema.title}</S.Legend>
      </S.Content>
      <S.UserArea>
        <S.Avatar onClick={onPressLogin} disabled={!!session?.user?.name}>
          <S.Icon>
            {!!session?.user?.name && (
              <S.Letter>{session?.user?.name[0]}</S.Letter>
            )}
            {!session?.user?.name && <UserOutlined />}
          </S.Icon>
          <S.User>{session?.user?.name ?? schema.do_login}</S.User>
        </S.Avatar>
        {!!session?.user?.name && (
          <>
            <S.Action icon={<BookOutlined />}>{schema.panel}</S.Action>
            <S.Action onClick={() => signOut()} icon={<LogoutOutlined />}>
              Sair
            </S.Action>
          </>
        )}
      </S.UserArea>
    </S.Root>
  );
};
