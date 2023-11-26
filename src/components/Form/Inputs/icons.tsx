import {
  UserOutlined,
  AlertOutlined,
  AccountBookOutlined
} from '@ant-design/icons';

export const icons = {
  user: <UserOutlined className="site-form-item-icon" />,
  email: <AccountBookOutlined className="site-form-item-icon" />,
  date: <AlertOutlined className="site-form-item-icon" />
};

export type IconType = keyof typeof icons;
