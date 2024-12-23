'use client';

import { FC, Key, ReactNode } from 'react';
import {
  UserOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { Flex, List, Menu, MenuProps } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import { MenuItemProps } from '@/types';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useWorkspacesQuery } from '@/graphql/types';
import { VSpace } from '@/components/ui';
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

export const SideMenu: FC<{ collapsed?: boolean }> = ({ collapsed = false  }) => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useCurrentUser();
  const { data: workspacesData } = useWorkspacesQuery({
    variables: {
      where: {
        userId: { equals: user.id ?? ''}
      }
    }
  });

  const activeKeys = [...items, ...bottomItems].filter((item) => pathname === `/${item?.key}`).map(item => item?.key) as string[];

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
      <VSpace size={8}>
        {menu(items)}

        {!collapsed && (
          <List
            dataSource={workspacesData?.workspaces}
            rootClassName={styles.workspacesList}
            renderItem={(item) => (
              <List.Item className={styles.workspacesListItem}>
                <Link 
                  href={`/workspace/${item.id}/table`}
                >
                  {item.name}
                </Link>
              </List.Item>
            )}
          />
        )}
      </VSpace>

      {menu(bottomItems)}
    </Flex>
  )
}