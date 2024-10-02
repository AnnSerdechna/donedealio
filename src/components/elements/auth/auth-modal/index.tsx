import { Modal, ModalProps } from 'antd'
import { FC } from 'react';

import { LoginForm, RegisterForm } from '../auth-forms';

export type ModalType = 'login' | 'register' | '';

type AuthModalProps = ModalProps & {
  modalType: ModalType
};

export const AuthModal: FC<AuthModalProps> = ({ modalType, onCancel, ...props }) => {
  const modalContent = () => {
    switch (modalType) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
      default:
        return null;
    };
  };

  return (
    <Modal
      open={!!modalType}
      footer={false}
      centered
      {...props}
    >
      {modalContent()}
    </Modal>
  )
}