'use client';

import { FC, Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { Drawer, Layout, Row } from 'antd';
import { usePathname } from 'next/navigation';

import { Logo, LogoProps } from '@/components/elements';
import { SideMenu } from '../side-menu';
import { TasksHeader } from '../header';
import styles from './index.module.scss';

const { Content, Sider } = Layout;

const LogoComponent: FC<LogoProps> = ({ ...props }) => (
  <Row align={'middle'} justify={"center"} className={styles.logoWrap}>
    <Logo {...props} />
  </Row>
)
export const TasksLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname])

  const onOpenMenu = () => setOpenMenu(true);
  const onCloseMenu = () => setOpenMenu(false);
 
  return (
    <Fragment>
      <Layout className={styles.tasksLayout}>
        <Sider
          className={styles.sider}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          collapsible
        >
          <LogoComponent hasLogoText={false} />
          <SideMenu />
        </Sider>
        <Layout>
          <TasksHeader onShowDrawer={onOpenMenu} />
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