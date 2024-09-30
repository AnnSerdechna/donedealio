import { FC, Key, ReactNode } from 'react';
import {
  SettingOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { Flex, Menu as AntMenu, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';

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

const userId = '1';

const items: MenuItemProps[] = [
  getItem(
    'Dashboard',
    'dashboard',
    <PieChartOutlined />,
  ),
  getItem(
    'Workspace',
    'workspace',
    <BulbOutlined />
  ),
  getItem(
    'Team',
    'team',
    <TeamOutlined />
  ),
];

const bottomItems: MenuItemProps[] = [
  { type: 'divider' },
  getItem(
    'Profile',
    'profile',
    <UserOutlined />
  ),
  getItem(
    'Settings',
    'settings',
    <SettingOutlined />
  ),
]?.filter(Boolean) as MenuItemProps[]

const Menu: FC<MenuProps & { items: MenuItemProps[] }> = ({ items, ...props }) => {
  return (
    <AntMenu
      theme={'dark'}
      mode={'inline'}
      items={items}
      {...props}
    />
  )
}

export const SideMenu: FC = () => {
  const router = useRouter()

  const onMemuItemClick: MenuProps['onClick'] = (event) => {
    router.push(`/${userId}/${event.key}`)
  };

  return (
    <Flex vertical justify={'space-between'} className={styles.menuContainer}>
      <Menu items={items} onClick={onMemuItemClick} />
      <Menu items={bottomItems} onClick={onMemuItemClick} />
    </Flex>
  )
}