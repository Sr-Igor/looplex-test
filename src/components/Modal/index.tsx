import { Modal as ModalAnt } from 'antd';
import { useTheme } from 'styled-components';

export interface ModalProps {
  open: boolean;
  children: JSX.Element;
  setOpen: (open: boolean) => void;
}

export const Modal = ({ children, open, setOpen }: ModalProps) => {
  const theme = useTheme();

  return (
    <ModalAnt
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      afterClose={() => setOpen(false)}
      destroyOnClose
      styles={{ body: { padding: theme.spacings.small } }}
    >
      {children}
    </ModalAnt>
  );
};
