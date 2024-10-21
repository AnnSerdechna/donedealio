'use client';

import { FC, Key, ReactNode } from 'react';
import {
  UserOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { Flex, Menu, MenuProps } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

import { MenuItemProps } from '@/types';
import styles from './index.module.scss';

function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
): MenuItemProps {

  // Access routes by role
  
  return {
    key,
    icon,
    label,
  } as MenuItemProps;
}

const items: MenuItemProps[] = [
  getItem(
    'Workspace',
    'workspace',
    <BulbOutlined />
  ),
];

const bottomItems: MenuItemProps[] = [
  {type: 'divider'},
  getItem(
    'Profile',
    'profile',
    <UserOutlined />
  )
];


export const HomeMenu: FC = () => (
  <Menu items={items} mode={'horizontal'} />
);

export const SideMenu: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const activeKeys = [...items, ...bottomItems].filter((item) => pathname?.includes(`${item?.key}`)).map(item => item?.key) as string[];

  const onMemuItemClick: MenuProps['onClick'] = (event) => {
    router.push(`/${event.key}`);
  };

  const menu = (items: MenuItemProps[]) => {
    return (
      <Menu 
        selectedKeys={activeKeys} 
        items={items} 
        theme={'light'}
        mode={'inline'} 
        onClick={onMemuItemClick} 
      />
    )
  }

  return (
    <Flex vertical justify={'space-between'} className={styles.menuContainer}>
      {menu(items)}
      {menu(bottomItems)}
    </Flex>
  )
}