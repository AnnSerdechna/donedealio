import { Form, FormItemProps } from 'antd';
import { FC, PropsWithChildren } from 'react';

const { Item } = Form

export const FormItem: FC<PropsWithChildren<FormItemProps>> = ({ children, ...props }) => (
  <Item {...props}>
    {children}
  </Item>
)