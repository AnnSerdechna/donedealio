'use client';

import React, { FC, Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Drawer, Grid, Layout, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { Logo } from '@/components/elements';
import { Button } from '@/components/ui';
import { UserHeader, SideMenu } from '@/components/user';
import styles from './index.module.scss';

const { Content, Sider } = Layout;
const { useBreakpoint } = Grid;

const IconWrap: FC<PropsWithChildren> = ({ children }) => (
  <Row align={'middle'} justify={"center"} className={styles.iconWrap}>
    {children}
  </Row>
);

export const UserLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const { md } = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname]);

  const onOpenMenu = () => setOpenMenu(true);
  const onCloseMenu = () => setOpenMenu(false);

  const logo = (
    <IconWrap>
      <Logo />
    </IconWrap>
  );

  return (
    <Fragment>
      <Layout className={styles.userLayout}>
        <Sider
          breakpoint='md'
          className={styles.sider}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          collapsedWidth={!md ? 0 : 60}
        >
          {logo}

          <SideMenu collapsed={collapsed} />

          <IconWrap>
            <Button
              type={'link'}
              size={'middle'}
              icon={collapsed ? <LeftOutlined /> : <RightOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </IconWrap>
        </Sider>

        <Layout >
          <UserHeader onShowMobileDrawer={onOpenMenu} />
          <Content className={styles.content}>
            {children}
          </Content>
        </Layout>
      </Layout>
      <Drawer
        title={logo}
        open={openMenu}
        width={'50%'}
        placement={'left'}
        styles={{ body: { padding: '16px 8px' } }}
        closeIcon={false}
        onClose={onCloseMenu}
      >
        <SideMenu />
      </Drawer>
    </Fragment>
  );
};