'use client';

import React, { FC, Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { App, Drawer, Layout, Row } from 'antd';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

import { Logo, LogoProps } from '@/components/elements';
import { SideMenu } from '../side-menu';
import { TasksHeader } from '../header';
import styles from './index.module.scss';

const { Content, Sider } = Layout;

const LogoComponent: FC<LogoProps> = ({ ...props }) => (
  <Row align={'middle'} justify={"center"} className={styles.logoWrap}>
    <Logo {...props} />
  </Row>
);

export const TasksLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const { message, modal } = App.useApp();
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname]);

  const onOpenMenu = () => setOpenMenu(true);
  const onCloseMenu = () => setOpenMenu(false);

  const logOut = () => {
    try {
      signOut({ callbackUrl: window.location.origin })
    } catch (error) {
      console.log(error, 'Log out error');
      message.error('Something went wrong!')
    }
  };

  const onConfirmLogout = () => {
    modal.confirm({
      title: 'Are you sure you want log out?',
      onOk: logOut,
    });
  };
 
  return (
    <Fragment>
      <Layout className={styles.tasksLayout}>
        <Sider
          className={styles.sider}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          style={{height: '100vh', overflow: 'hidden'}}
          collapsible
        >
          <LogoComponent hasLogoText={false} />
          <SideMenu />
        </Sider>
        <Layout>
          <TasksHeader 
            onShowMobileDrawer={onOpenMenu} 
            onConfirmLogout={onConfirmLogout}
          />
          <Content className={styles.content}>
            <div className={styles.contentWrap}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Drawer 
        title={<LogoComponent />}
        open={openMenu}
        width={'100%'}
        placement={'left'}
        onClose={onCloseMenu}
      >
        <SideMenu />
      </Drawer>
    </Fragment>
  );
};