'use client';

import React, { FC, PropsWithChildren, useState } from 'react';
import { Layout, Row, theme } from 'antd';
import { Logo } from '@/components/logo';
import { TasksMenu } from '../menu';
import { TasksHeader } from '../header';

const { Content, Sider } = Layout;

export const TasksLayout: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Row
          align={'middle'}
          justify={"center"}
          style={{ height: 64 }}
        >
          <Logo />
        </Row>

        <TasksMenu />
      </Sider>
      <Layout>
        <TasksHeader colorBgContainer={colorBgContainer} />
        <Content style={{ margin: '16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};