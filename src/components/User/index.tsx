import Image from 'next/image';

import { DeleteOutlined } from '@ant-design/icons';
import { format } from 'date-fns';
import { IUser } from 'interfaces/user';

import { texts } from './constants';

import * as S from './styled';

export interface UserProps {
  user: IUser;
  onClick: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}

export const User = ({ user, onClick, onDelete }: UserProps) => {
  return (
    <S.Root>
      <S.ImageContent>
        {user.avatar && (
          <Image src={user.avatar} alt={'avatar'} width={100} height={100} />
        )}
        {!user.avatar && <S.Letter>{user?.name?.[0] ?? 'U'}</S.Letter>}
      </S.ImageContent>
      <S.Infos>
        <S.Name>{user.name}</S.Name>
        <S.Email>{user.email}</S.Email>
      </S.Infos>
      <S.Birthday>
        {texts.born}{' '}
        {user.birthday ? format(new Date(user.birthday), 'dd/MM/yyyy') : '-'}
      </S.Birthday>

      <S.Actions>
        <S.Action onClick={() => onClick(user)}>{texts.details}</S.Action>

        <S.Action
          danger
          icon={<DeleteOutlined />}
          onClick={() => onDelete(user)}
        >
          {texts.exclude}
        </S.Action>
      </S.Actions>
    </S.Root>
  );
};
