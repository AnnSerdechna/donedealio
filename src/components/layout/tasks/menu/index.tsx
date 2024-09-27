import React, { FC } from 'react';
import {
  SettingOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu} from 'antd';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Workspace', 'sub1', <BulbOutlined />, [
    getItem('Workspace 1', '3'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6')]),
  { type: 'divider' },
  getItem('Profile', '9', <UserOutlined />),
  getItem('Settings', '11', <SettingOutlined />),
];


export const TasksMenu: FC = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
  );
};