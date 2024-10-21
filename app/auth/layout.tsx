import type { ReactNode } from 'react';

import styles from './layout.module.scss';

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
