import Link from 'next/link';

import { SvgIcon } from '@/assets/icons';
import styles from './index.module.scss';

export const Logo = () => (
  <Link href={'/'} className={styles.logoLink}>
    <SvgIcon type={'logo'} />
  </Link>
)