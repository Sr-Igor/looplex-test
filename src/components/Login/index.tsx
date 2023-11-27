import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { Modal } from 'components/Modal';

import * as S from './styled';

export interface LoginProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  schema: {
    google: string;
    googleIcon: React.ReactNode;
    github: string;
    githubIcon: React.ReactNode;
    outLogin: string;
    outLoginPlaceholder: string;
    enter: string;
  };
}

export const Login = ({ open, setOpen, schema }: LoginProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const [name, setName] = useState('');

  return (
    <Modal open={open} setOpen={setOpen}>
      <S.Root>
        <S.Title>{schema.enter}</S.Title>
        <S.Options>
          <S.Auth onClick={() => signIn('github')} icon={schema.githubIcon}>
            {schema.github}
          </S.Auth>
          <S.Auth onClick={() => signIn('google')} icon={schema.googleIcon}>
            {schema.google}
          </S.Auth>
          <S.NoAuth
            data-testid="login-out-button"
            onClick={() => setCollapsed(!collapsed)}
          >
            {schema.outLogin}
          </S.NoAuth>
          <S.Collapsible in={collapsed}>
            <div className="collapse-container">
              <Input
                data-testid="login-out-input"
                prefix={<UserOutlined />}
                name="name"
                placeholder={schema.outLoginPlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.Enter
                data-testid="login-out-enter"
                onClick={() => signIn('credentials', { name })}
                disabled={!name}
              >
                {schema.enter}
              </S.Enter>
            </div>
          </S.Collapsible>
        </S.Options>
      </S.Root>
    </Modal>
  );
};
