import { FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

export const AuthLayout: FC<PropsWithChildren> = ({ children  }) => (
  <section className={styles.authLayout}>
    {children}
  </section>
)