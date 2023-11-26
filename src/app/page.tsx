'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { schema as schemaLogin } from 'schemas/login';
import { schema as schemaScale } from 'schemas/scale';
import { schema as schemaSection } from 'schemas/section';

import { Login } from 'components/Login';
import { Scale } from 'components/Scale';
import { Section } from 'components/Section';

import Dashboard from 'templates/Dashboard';

const Home = () => {
  const { data: session } = useSession();
  const loggedIn = !!session?.user?.name;

  const [open, setOpen] = useState(false);

  const { push } = useRouter();

  return (
    <Dashboard>
      <>
        <Scale
          schema={schemaScale}
          loggedIn={loggedIn}
          onClick={() => (loggedIn ? push('/list') : setOpen(true))}
        />
        <Section schema={schemaSection} />
        <Login open={open} setOpen={setOpen} schema={schemaLogin} />
      </>
    </Dashboard>
  );
};

export default Home;
