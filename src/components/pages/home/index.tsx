'use client';

import { Layout } from 'antd';
import { FC } from 'react'
import { HomeHeader } from './header';

const { Content } = Layout;

export const HomePage: FC = () => {
  return (
    <Layout>
      <HomeHeader />
      
      <Content>
        
      </Content>
    </Layout>
  )
}