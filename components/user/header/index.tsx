import React, { FC } from 'react';
import {
  BellOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { App, Badge, Col, Flex, Input, Layout } from 'antd';
import { signOut } from 'next-auth/react';

import { Button, Icon } from '@/components/ui';
import variables from '@/styles/variables.module.scss';
import styles from './index.module.scss';
import { AvaratBtn } from '@/components/user';

const { Header } = Layout;

type TasksHeaderProps = {
  onShowMobileDrawer: VoidFunction
}

export const UserHeader: FC<TasksHeaderProps> = ({ onShowMobileDrawer }) => {
  const { message, modal } = App.useApp();

  const logOut = () => {
    try {
      signOut({ callbackUrl: `${window.location.origin}/auth/login` })
    } catch (error) {
      console.log(error, 'Log out error');
      message.error('Something went wrong!')
    }
  };

  const hanldeConfirmLogout = () => {
    modal.confirm({
      title: 'Are you sure you want log out?',
      onOk: logOut,
    });
  };

  return (
    <Header style={{ padding: `0 ${variables.sizeSm}` }} className={styles.taskHeader}>
      <Flex justify={'space-between'} align={'center'} gap={16}>
        <div className={styles.menuBtnWrap}>
          <Button
            type={'text'}
            size={'middle'}
            icon={<MenuOutlined />}
            onClick={onShowMobileDrawer}
          />
        </div>

        <Col sm={16} md={8} lg={6}>
          <Input
            size={'small'}
            suffix={<Icon icon={<SearchOutlined />} />}
          />
        </Col>
        <Flex align={'center'} gap={16}>
          <Badge count={5} size={'small'}>
            <Icon icon={<BellOutlined />} size='1.4em' />
          </Badge>

          <AvaratBtn onLogout={hanldeConfirmLogout} />
        </Flex>
      </Flex>
    </Header>
  )
}