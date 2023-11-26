'use client';

import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/pt_BR';
import 'dayjs/locale/pt-br';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider locale={locale}>{children}</ConfigProvider>;
};
