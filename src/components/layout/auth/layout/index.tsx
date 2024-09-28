import { FC, PropsWithChildren } from 'react';
import { Col, Flex } from 'antd';
import Image from 'next/image';

import AuthImage from '@/assets/images/auth.jpg';
import styles from './index.module.scss';
import { Logo } from '@/components/elements';

export const AuthLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Flex className={styles.contentWrap}>
      <Col span={10} className={styles.formCol}>
        <Logo />

        <Flex align={'center'} justify={'center'} className={styles.formWrap}>
          {children}
        </Flex>
      </Col>
      <Col span={14}>
        <Image
          src={AuthImage.src}
          alt={'Auth image'}
          quality={100}
          className={styles.image}
          fill
        />
      </Col>
    </Flex>
  )
}