const inter = Inter({ subsets: ['latin'] });

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Provider as Antd } from 'providers/antd';
import { Provider as Query } from 'providers/query-client';
import { Provider as Redux } from 'providers/redux';
import { Provider as Session } from 'providers/session';
import { Provider as Styled } from 'providers/styled';

export const metadata: Metadata = {
  title: 'Looplex',
  description: 'Test your skills and earn money'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Styled>
          <Query>
            <Redux>
              <Session>
                <Antd>{children}</Antd>
              </Session>
            </Redux>
          </Query>
        </Styled>
      </body>
    </html>
  );
}
