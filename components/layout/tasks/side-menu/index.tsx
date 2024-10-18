import { FC, Key, ReactNode } from 'react';
import {
  SettingOutlined,
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
// import { useSession } from 'next-auth/react';

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
    'workspaces',
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

export const HomeMenu: FC = () => (
  <Menu items={items} mode={'horizontal'} />
);

export const SideMenu: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  // const { data: session } = useSession();

  const activeKeys = [...items, ...bottomItems].filter((item) => pathname?.includes(`${item?.key}`)).map(item => item?.key) as string[];

  const onMemuItemClick: MenuProps['onClick'] = (event) => {
    router.push(`/${event.key}`);
  };

  return (
    <Flex vertical justify={'space-between'} className={styles.menuContainer}>
      <Menu selectedKeys={activeKeys} items={items} onClick={onMemuItemClick} mode={'inline'} />
      <Menu selectedKeys={activeKeys} items={bottomItems} onClick={onMemuItemClick} mode={'inline'} />
    </Flex>
  )
}