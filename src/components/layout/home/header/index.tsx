import { Flex, Layout, Menu, MenuProps } from 'antd';
import { FC } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Logo } from '@/components/elements';
import { Button } from '@/components/ui';
import variables from '@/styles/variables.module.scss';

const { Header } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Dashboard',
    key: 'dashboard',
  },
  {
    label: 'Workspace',
    key: 'workspace',
  },
  {
    label: 'Team',
    key: 'team'
  },
  {
    label: 'Profile',
    key: 'profile'
  },
  {
    label: 'Settings',
    key: 'settings'
  },
];

type HomeHeaderProps = {
  onLogin: VoidFunction, 
  onRegister: VoidFunction
}

export const HomeHeader: FC<HomeHeaderProps> = ({ onLogin, onRegister }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const onMemuItemClick: MenuProps['onClick'] = (event) => {
    router.push(`/${session?.user?.id}/${event.key}`);
  };

  return (
    <Header style={{ padding: `0 ${variables.sizeXl}` }}>
      <Flex align={'center'} justify={'space-between'}>
        <Logo />

       {!session?.user ? (
          <Flex align={'center'} gap={16}>
            <Button text={'Log in'} type={'default'} onClick={onLogin} />
            <Button text={'Sign up'} onClick={onRegister} />
          </Flex>
       ) : (
            <Menu 
              items={items} 
              mode={'horizontal'} 
              theme={'light'} 
              onClick={onMemuItemClick} 
            />
       )}
      </Flex>
    </Header>
  )
}