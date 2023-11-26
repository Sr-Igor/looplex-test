import { useState } from 'react';

import { schema as schemaFooter } from 'schemas/footer';
import { schema as schemaHeader } from 'schemas/header';
import { schema as schemaLogin } from 'schemas/login';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Login } from 'components/Login';
import { Main } from 'components/Main/';

import * as S from './styles';

export interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Main>
      <Header onPressLogin={() => setOpen(true)} schema={schemaHeader} />
      <Login open={open} setOpen={setOpen} schema={schemaLogin} />
      <S.Container>{children}</S.Container>
      <Footer schema={schemaFooter} />
    </Main>
  );
};

export default Dashboard;
