import React, { FC } from 'react';
import {
  UserOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Col, Flex, Input, Layout } from 'antd';

import { Icon } from '@/components/ui';

const { Header } = Layout;

export const TasksHeader: FC = () => {
  return (
    <Header>
      <Flex justify={'space-between'} align={'center'}>
        <Col span={8}>
          <Input 
            size={'middle'} 
            suffix={<Icon icon={<SearchOutlined />} />} 
          />
        </Col>
        <Flex align={'center'} gap={16}>
          <Badge count={5} size={'small'}>
            <Icon icon={<BellOutlined />} size='1.4em'  />
          </Badge>

          <Avatar size={'large'} icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Header>
  )
}