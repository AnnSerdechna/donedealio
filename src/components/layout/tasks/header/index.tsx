import React, { FC } from 'react';
import {
  UserOutlined,
  BellOutlined,
  SearchOutlined,
  MenuOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Avatar, Badge, Col, Dropdown, Flex, Input, Layout, MenuProps } from 'antd';

import variables from '@/styles/variables.module.scss';
import styles from './index.module.scss';

import { Button, Icon } from '@/components/ui';

const { Header } = Layout;

type TasksHeaderProps = {
  onShowMobileDrawer: VoidFunction
  onConfirmLogout: VoidFunction
}

export const TasksHeader: FC<TasksHeaderProps> = ({ onShowMobileDrawer, onConfirmLogout  }) => {
  const items: MenuProps['items'] = [
    {
      key: '2',
      label: 'Log out',
      icon: <LogoutOutlined />,
      onClick: onConfirmLogout
    },
  ];

  return (
    <Header style={{padding: `0 ${variables.sizeSm}`}}>
      <Flex justify={'space-between'} align={'center'} gap={16}>
        <div className={styles.menuBtnWrap}>
          <Button
            type={'link'}
            size={'small'}
            icon={<MenuOutlined />} 
            onClick={onShowMobileDrawer}
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

          <Dropdown menu={{ items }}>
            <div className={styles.avatarWrap}>
              <Avatar
                size={'large'}
                icon={<UserOutlined />}
              />
            </div>
          </Dropdown>
        </Flex>
      </Flex>
    </Header>
  )
}