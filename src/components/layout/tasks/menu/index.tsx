import React, { FC } from 'react';
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
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {

  const memberMenu: string[] = ['dashboard', 'workspace', 'workspace?1', 'profile', 'settings'];
  const adminMenu: string[] = ['dashboard', 'workspace', 'workspace?1', 'team', 'team?1', 'profile', 'settings'];

  if (role === 'MEMBER') {
    if (!memberMenu.includes(key)) {
      return null
    }
  }

  if (role === 'ADMIN' && !adminMenu.includes(key)) {
    return null
  }

  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    'Dashboard', 
    'dashboard',
    <Link href={'/dashboard'}>
      <PieChartOutlined />
    </Link>
  ),
  getItem(
    'Workspace', 
    'workspace', 
    <BulbOutlined />, 
    [getItem(
    <Link href={'/workspace?1'}>
      Workspace 1
    </Link>,
    'workspace?1'
    )]),
  getItem(
    'Team', 
    'team', 
    <TeamOutlined />, 
    [getItem(
      <Link href={'/team?1'}>
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
    <Link href={'/profile'}>
      <UserOutlined />
    </Link>
  ),
  getItem(
    'Settings',
    'settings',
    <Link href={'/settings'}>
      <SettingOutlined />
    </Link>
  ),
  { type: 'divider' },
]?.filter(Boolean) as MenuItem[]

const MenuComponent: FC<{ items: MenuItem[]}> = ({items}) => {
  const pathname = usePathname();

  const selectedItem = pathname.slice(1);

  return (
    <Menu
      theme={'dark'}
      defaultSelectedKeys={['']}
      defaultOpenKeys={[selectedItem]}
      selectedKeys={[selectedItem]}
      activeKey={selectedItem}
      mode={'inline'}
      items={items}
    />
  )
}

export const TasksMenu: FC = () => (
  <Flex vertical justify={'space-between'} className={styles.menuContainer}>
    <MenuComponent items={items} />
    <MenuComponent items={bottomItems} />
  </Flex>
)