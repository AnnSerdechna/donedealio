import { MenuProps } from 'antd';

export type MenuItemProps = Required<MenuProps>['items'][number];

export type MessageProps = {
  status: 'error' | 'success',
  content: string
};