import { Modal as AntModal, ModalProps } from 'antd';
import { FC } from 'react';

export const Modal: FC<ModalProps> = ({ children, ...props }) => (
  <AntModal
    styles={{ content: { padding: '58px 32px 32px' } }}
    footer={false}
    closable
    {...props}
  >
    {children}
  </AntModal>
)