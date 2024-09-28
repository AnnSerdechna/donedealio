import Link from 'next/link';

import { SvgIcon } from '@/assets/icons';

export const Logo = () => (
  <Link href={'/'} style={{fontSize: 28}}>
    <SvgIcon type={'logo'} />
  </Link>
)