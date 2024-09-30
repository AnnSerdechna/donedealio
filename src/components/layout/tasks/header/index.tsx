import React, { FC } from 'react';
import {
  UserOutlined,
  BellOutlined,
  SearchOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { Avatar, Badge, Col, Flex, Input, Layout } from 'antd';

import variables from '@/styles/variables.module.scss';
import styles from './index.module.scss';

import { Button, Icon } from '@/components/ui';

const { Header } = Layout;

export const TasksHeader: FC<{ onShowDrawer: VoidFunction }> = ({ onShowDrawer  }) => {
  return (
    <Header style={{padding: `0 ${variables.sizeSm}`}}>
      <Flex justify={'space-between'} align={'center'} gap={16}>
        <div className={styles.menuBtnWrap}>
          <Button
            type={'link'}
            size={'small'}
            icon={<MenuOutlined />} 
            onClick={onShowDrawer}
          />
        </div>

        <Col sm={16} md={8} lg={8}>
          <Input
            size={'middle'}
            suffix={<Icon icon={<SearchOutlined />} />}
          />
        </Col>
        <Flex align={'center'} gap={16}>
          <Badge count={5} size={'small'}>
            <Icon icon={<BellOutlined />} size='1.4em'  />
          </Badge>

          <div className={styles.avatarWrap}>
            <Avatar
              size={'large'}
              icon={<UserOutlined />}
            />
          </div>
        </Flex>
      </Flex>
    </Header>
  )
}