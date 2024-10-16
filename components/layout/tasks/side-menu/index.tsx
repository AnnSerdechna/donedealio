import { FC, Key, ReactNode } from 'react';
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { Flex, MenuProps } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

import { MenuItemProps } from '@/types';
import { Menu } from './menu';
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

  const activeKeys = items.filter((item) => pathname?.includes(`${item?.key}`)).map(item => item?.key) as string[];

  const onMemuItemClick: MenuProps['onClick'] = (event) => {
    router.push(`/${event.key}`);
  };

  return (
    <Flex vertical justify={'space-between'} className={styles.menuContainer}>
      <Menu selectedKeys={activeKeys} items={items} onClick={onMemuItemClick} mode={'inline'} />
    </Flex>
  )
}