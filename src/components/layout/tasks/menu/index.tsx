import React, { FC, Key } from 'react';
import {
  SettingOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Flex, Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './index.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

type RoleType = 'ADMIN' | 'MEMBER' | 'DEFAULT';

const role: RoleType = 'ADMIN'; 

function getItem(
  label: React.ReactNode,
  key: Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {

  const memberMenu: string[] = ['dashboard', 'workspace', 'workspace?1', 'profile', 'settings'];
  const adminMenu: string[] = ['dashboard', 'workspace', 'workspace?1', 'team', 'team?1', 'profile', 'settings'];

  if (role === 'MEMBER') {
    if (!memberMenu.includes(key as string)) {
      return null
    }
  }

  if (role === 'ADMIN' && !adminMenu.includes(key as string)) {
    return null
  }

  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const userId = '1';

const navigate = (href: string): string => {
  return `/${userId}/${href}`
};

const items: MenuItem[] = [
  getItem(
    'Dashboard',
    'dashboard',
    <Link href={navigate('dashboard')}>
      <PieChartOutlined />
    </Link>
  ),
  getItem(
    'Workspace',
    'workspace',
    <BulbOutlined />,
    [getItem(
      <Link href={navigate('workspace/1')}>
        Workspace 1
      </Link>,
      'workspace?1'
    )]),
  getItem(
    'Team',
    'team',
    <TeamOutlined />,
    [getItem(
      <Link href={navigate('team/1')}>
        Team 1
      </Link>,
      'team?1'
    )]),
];

const bottomItems: MenuItem[] = [
  { type: 'divider' },
  getItem(
    'Profile',
    'profile',
    <Link href={navigate('profile')}>
      <UserOutlined />
    </Link>
  ),
  getItem(
    'Settings',
    'settings',
    <Link href={navigate('settings')}>
      <SettingOutlined />
    </Link>
  ),
  { type: 'divider' },
]?.filter(Boolean) as MenuItem[]


const MenuComponent: FC<{ items: MenuItem[] }> = ({ items }) => {
  const pathname = usePathname();

  const selectedMenuItems = (items: MenuItem[]) => items.filter(item => pathname.includes(item?.key as string)).map(item => item?.key as string)

  return (
    <Menu
      theme={'dark'}
      defaultSelectedKeys={['']}
      defaultOpenKeys={selectedMenuItems(items)}
      selectedKeys={selectedMenuItems(items)}
      activeKey={selectedMenuItems(items)[0]}
      mode={'inline'}
      items={items}
    />
  )
}

export const TasksMenu: FC = () => {
  return (
    <Flex vertical justify={'space-between'} className={styles.menuContainer}>
      <MenuComponent items={items} />
      <MenuComponent items={bottomItems} />
    </Flex>
  )
}