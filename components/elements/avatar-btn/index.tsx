import { Avatar, Dropdown, Flex, MenuProps } from 'antd'
import { LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { FC } from 'react';

import styles from './index.module.scss';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Text, Title } from '@/components/ui';

type AvaratBtnProps = {
  onLogout: VoidFunction
};

const getAvatarLabel = (name: string) => name
  .split(' ')
  .map(char => char
  .slice(0, 1).toUpperCase())
  .join('');


console.log(getAvatarLabel('Anna Serdechna'));


export const AvaratBtn: FC<AvaratBtnProps> = ({ onLogout }) => {
  const user = useCurrentUser();

  const items: MenuProps['items'] = [
    {
      key: 'info',
      label: (
        <Flex vertical>
          <Text strong>{user?.name}</Text>
          <Text>{user?.email}</Text>
        </Flex>
      ),
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      label: 'Log out',
      icon: <LogoutOutlined />,
      onClick: onLogout,
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <div className={styles.avatarWrap}>
        <Avatar
          size={'large'}
          src={user?.image}
        >
          {!!user?.name ? getAvatarLabel(user?.name) : ''}
        </Avatar>
      </div>
    </Dropdown>
  )
}