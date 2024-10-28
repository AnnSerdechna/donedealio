import Link from 'next/link';
import { Karantina } from 'next/font/google';
import { FC } from 'react';

import styles from './index.module.scss';
import { SvgIcon } from '@/assets/icons';

const karantina = Karantina({ subsets: ['latin'], weight: '400' });

export type LogoProps = { hasLogoText?: boolean, size?: string | number };

export const Logo: FC<LogoProps> = ({ hasLogoText = false, size  }) => (
  <Link 
    href={'/'} 
    className={styles.logoLink} 
    style={{fontFamily: karantina.style.fontFamily, fontSize: !!size ? size : 30}}
    >
    <SvgIcon type={'logo'} />
    {hasLogoText && <span>DoneDeal</span>}
  </Link>
)