'use client';

import { Layout } from 'antd';
import { FC, PropsWithChildren } from 'react'

import { HomeHeader } from '../header';
import styles from './index.module.scss';

const { Content } = Layout;

export const HomeLayout: FC<PropsWithChildren> = ({ children  }) => {
  return (
    <Layout>
      <HomeHeader />
      
      <Content className={styles.homeContent}>
        {children}
      </Content>
    </Layout>
  )
}