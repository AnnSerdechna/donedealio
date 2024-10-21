import type { ReactNode } from 'react';

import styles from './index.module.scss';

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
  <section className={styles.authLayout}>
    {children}
  </section>
  );
}
