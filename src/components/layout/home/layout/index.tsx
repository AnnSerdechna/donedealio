'use client';

import { Layout } from 'antd';
import { FC, Fragment, PropsWithChildren, useState } from 'react'

import { HomeHeader } from '../header';
import { ModalType, AuthModal } from '@/components/elements';
import HomeBg from '@/assets/images/home-bg.png';
import styles from './index.module.scss';
import { useSession } from 'next-auth/react';

const { Content } = Layout;

export const HomeLayout: FC<PropsWithChildren> = ({ children  }) => {
  const [modalType, setModalType] = useState<ModalType>('');
  const { data: session, status } = useSession();

  const handleOpenLogin = () => setModalType('login');
  const handleOpenRegister = () => setModalType('register');
  const handleCloseAuthModal = () => setModalType('');

  return (
    <Fragment>
      <div>
        {!session 
          ? <p>User not logged in</p>
          : <p>Welcome, {session.user?.email}</p>
        }

      </div>
      <Layout
        style={{
          backgroundImage: `url(${HomeBg.src})`,
          backgroundPosition: 'right',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh'
        }}
      >
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