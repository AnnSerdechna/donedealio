import React, { FC } from 'react';
import {
  UserOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Col, Flex, Input, Layout } from 'antd';

const { Header } = Layout;

export const TasksHeader: FC<{ colorBgContainer : string}> = ({ colorBgContainer }) => {
  return (
    <Header style={{ padding: 16, background: colorBgContainer }}>
      <Flex style={{ height: '100%' }} justify={'space-between'} align={'center'}>
        <Col span={8}>
          <Input size={'middle'} suffix={<SearchOutlined />} />
        </Col>
        <Flex align={'center'} gap={16} style={{ height: '100%' }}>
          <Badge count={5} size={'small'}>
            <BellOutlined style={{ fontSize: 24, display: 'block' }} />
          </Badge>

          <Avatar size={'large'} icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Header>
  )
}