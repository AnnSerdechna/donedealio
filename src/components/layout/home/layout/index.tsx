'use client';

import { Layout } from 'antd';
import { FC, Fragment, PropsWithChildren, useState } from 'react'

import { HomeHeader } from '../header';
import { ModalType, AuthModal } from '@/components/elements';
import styles from './index.module.scss';

const { Content } = Layout;

export const HomeLayout: FC<PropsWithChildren> = ({ children  }) => {
  const [modalType, setModalType] = useState<ModalType>('');

  const handleOpenLogin = () => setModalType('login');
  const handleOpenRegister = () => setModalType('register');
  const handleCloseAuthModal = () => setModalType('');

  return (
    <Fragment>
      <Layout>
        <HomeHeader 
          onLogin={handleOpenLogin}
          onRegister={handleOpenRegister}
        />

        <Content className={styles.homeContent}>
          {children}
        </Content>
      </Layout>

      <AuthModal
        modalType={modalType}
        onCancel={handleCloseAuthModal}
        footer={false}
        centered
      />
    </Fragment>
  )
}