import { Form as AntForm, FormProps } from 'antd';
import { FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

export const Form: FC<PropsWithChildren<FormProps>> = ({ children, ...props }) => (
  <AntForm
    layout={'vertical'}
    className={styles.form}
    {...props}
  >
    {children}
  </AntForm>
)