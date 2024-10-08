import { Menu as AntMenu, MenuProps } from 'antd';
import { FC } from 'react';

import { MenuItemProps } from '@/types';

export const Menu: FC<MenuProps & { items: MenuItemProps[] }> = ({ items, ...props }) => {
  return (
    <AntMenu
      theme={'light'}
      items={items}
      {...props}
    />
  )
}
