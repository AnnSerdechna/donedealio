import { Col, Flex } from 'antd';
import Image from 'next/image';
import { ReactNode } from 'react';

import AuthImage from '../../assets/images/auth.jpg';

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <Flex style={{height: '100vh'}}>
      <Col span={10} style={{height: '100%', padding: 24}}>
        <Flex align={'center'} justify={'center'} style={{height: '100%'}}>
          {children}
        </Flex>
      </Col>
      <Col span={14}>
        <Image 
          src={AuthImage.src} 
          alt={'Auth image'} 
          style={{objectFit: 'cover'}}
          quality={100} 
          fill
        />
      </Col>
  </Flex>
  );
}