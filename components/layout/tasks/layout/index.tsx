'use client';

import React, { FC, Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { Drawer, Layout, Row } from 'antd';
import { usePathname } from 'next/navigation';

import { Logo, LogoProps } from '@/components/elements';
import { SideMenu } from '../side-menu';
import { TasksHeader } from '../header';
import styles from './index.module.scss';
import { Button, Icon } from '@/components/ui';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const LogoComponent: FC<LogoProps> = ({ ...props }) => (
  <Row align={'middle'} justify={"center"} className={styles.logoWrap}>
    <Logo {...props} />
  </Row>
);

export const TasksLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname]);

  const onOpenMenu = () => setOpenMenu(true);
  const onCloseMenu = () => setOpenMenu(false);

  return (
    <Fragment>
      <Layout className={styles.tasksLayout}>
        <Sider
          className={styles.sider}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          style={{ height: 'calc(100vh - 16px)', overflow: 'hidden'}}
        >
          <LogoComponent />
      
          <SideMenu />
          <Row align={'middle'} justify={"center"} className={styles.logoWrap}>
            {collapsed ? (
              <Button type={'link'} size={'middle'} icon={<Icon icon={<LeftOutlined />} />} onClick={() => setCollapsed(false)} />
            ) : (
              <Button type={'link'} size={'middle'} icon={<Icon icon={<RightOutlined />} />} onClick={() => setCollapsed(true)} />
            )}
          </Row>
        </Sider>

        <Layout >
          <TasksHeader onShowMobileDrawer={onOpenMenu} />
          <Content className={styles.content}>
            {children}
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