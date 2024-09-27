import Link from 'next/link';

import { SvgIcon } from '@/assets/icons';

export const Logo = () => (
  <Link href={'/'} style={{fontSize: 32}}>
    <SvgIcon type={'logo'} />
  </Link>
)