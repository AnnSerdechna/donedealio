import { FC, PropsWithChildren } from 'react';
import { FormProps } from 'antd';

import { Form } from '@/components/ui';
import styles from './index.module.scss';

export const AuthForm: FC<PropsWithChildren<FormProps>> = ({ children, ...props }) => {
  return (
    <Form
      className={styles.authForm}
      {...props}
    >
      {children}
    </Form>
  )
}
