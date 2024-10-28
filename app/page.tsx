import { Flex } from 'antd';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{padding: '0 40px'}}>
      <header style={{lineHeight: '64px'}}>
        <Flex gap={16} justify='end'>
          <Link href={'/auth/login'} style={{fontSize: 18}}>Log in</Link>
          <Link href={'/auth/register'} style={{ fontSize: 18 }}>Sign up</Link>
        </Flex>
      </header>
    </div>
  );
};