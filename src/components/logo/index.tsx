import { SvgIcon } from '@/assets/icons';
import Link from 'next/link';

export const Logo = () => (
  <Link href={'/'} style={{fontSize: 32}}>
    <SvgIcon type={'logo'} />
  </Link>
)