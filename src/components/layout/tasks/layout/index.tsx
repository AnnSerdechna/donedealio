'use client';

import React, { FC, Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { Drawer, Layout, Row } from 'antd';
import { usePathname } from 'next/navigation';

import { Logo } from '@/components/elements';
import { TasksMenu } from '../menu';
import { TasksHeader } from '../header';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from '@/components/ui';
import styles from './index.module.scss';

const { Content, Sider } = Layout;

const LogoComponent:FC = () => (
  <Row align={'middle'} justify={"center"} className={styles.logoWrap}>
    <Logo />
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
          <LogoComponent />
          <TasksMenu />
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
        rootClassName={styles.menuDrawer}
        closeIcon={false}
        extra={(
          <Button 
            type={'link'}
            size={'small'} 
            theme={'dark'}
            icon={<CloseOutlined />} 
            onClick={onCloseMenu}
          />
        )}
      >
        <TasksMenu />
      </Drawer>
    </Fragment>
  );
};