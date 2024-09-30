import Link from 'next/link';
import { Karantina } from 'next/font/google';
import { FC } from 'react';

import { SvgIcon } from '@/assets/icons';
import styles from './index.module.scss';

const karantina = Karantina({ subsets: ['latin'], weight: '400' });

export type LogoProps = { hasLogoText?: boolean };

export const Logo: FC<LogoProps> = ({ hasLogoText = true  }) => (
  <Link href={'/'} className={styles.logoLink} style={{fontFamily: karantina.style.fontFamily}}>
    <SvgIcon type={'logo'} />
    {hasLogoText && <span>DoneDeal</span>}
  </Link>
)