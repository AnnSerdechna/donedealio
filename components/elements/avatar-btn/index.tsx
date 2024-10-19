import { Avatar, Dropdown, Flex, MenuProps } from 'antd'
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';
import { FC } from 'react';

import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Text } from '@/components/ui';
import { useRouter } from 'next/navigation';

type AvaratBtnProps = {
  onLogout: VoidFunction
};

const getAvatarLabel = (name: string) => name
  .split(' ')
  .map(char => char
  .slice(0, 1).toUpperCase())
  .join('');

export const AvaratBtn: FC<AvaratBtnProps> = ({ onLogout }) => {
  const user = useCurrentUser();
  const router = useRouter();

  const onEdit = () => router.push('/profile')

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
      key: 'edit',
      label: 'Edit',
      icon: <EditOutlined />,
      onClick: onEdit,
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
      <Avatar
        size={'large'}
        src={user?.image}
      >
        {!!user?.name ? getAvatarLabel(user?.name) : ''}
      </Avatar>
    </Dropdown>
  )
}