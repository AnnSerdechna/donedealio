import { FC, PropsWithChildren } from 'react';
import { Alert, FormProps } from 'antd';

import { Form } from '@/components/ui';
import styles from './index.module.scss';

export const AuthForm: FC<PropsWithChildren<FormProps & {error?: string}>> = ({ error, children, ...props }) => {
  return (
    <Form
      className={styles.authForm}
      {...props}
    >
      {children}
      {!!error && <Alert message={error} type={'error'} />}
    </Form>
  )
}
