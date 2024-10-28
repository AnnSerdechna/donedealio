import { Form as AntForm, FormInstance, FormProps } from 'antd';
import { FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

export const Form: FC<PropsWithChildren<FormProps & { form?: FormInstance }>> = ({ form, children, ...props }) => (
  <AntForm
    form={form}
    layout={'vertical'}
    className={styles.form}
    requiredMark={false}
    size={'large'}
    {...props}
  >
    {children}
  </AntForm>
)