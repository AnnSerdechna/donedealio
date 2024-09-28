'use client';

import React, { FC, PropsWithChildren, useState } from 'react';
import { Layout, Row } from 'antd';

import { Logo } from '@/components/elements';
import { TasksMenu } from '../menu';
import { TasksHeader } from '../header';
import styles from './index.module.scss';

const { Content, Sider } = Layout;

export const TasksLayout: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
 
  return (
    <Layout className={styles.tasksLayout}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Row align={'middle'} justify={"center"} className={styles.logoWrap}>
          <Logo />
        </Row>

        <TasksMenu />
      </Sider>
      <Layout>
        <TasksHeader />
        <Content className={styles.content}>
          <div className={styles.contentWrap}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};