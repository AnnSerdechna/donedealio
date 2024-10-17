import { FC, Fragment, ReactNode } from 'react';
import { Card, Divider, Flex } from 'antd';

import { Title, Text } from '@/components/ui';
import styles from './index.module.scss';
import { Logo } from '../../logo';
import { SocialBtns } from '../social-btns';
import Link from 'next/link';

type AuthCardProps = {
  title: string
  description: ReactNode
  backLinkUrl?: string
  backLinkLabel?: string
  hasSocials?: boolean
  children: ReactNode
}
export const AuthCard: FC<AuthCardProps> = ({
  title,
  description,
  backLinkUrl,
  backLinkLabel,
  hasSocials = false,
  children,
}) => {
  return (
    <Card className={styles.authForm} styles={{ body: { padding: 40 } }}>
      <Flex vertical gap={24} justify='center'>
        <Logo size={60} />
        <Flex vertical gap={8}>
          <Title centered>{title}</Title>
          {!!backLinkUrl ? (
            <Flex justify={'center'} align={'center'} gap={4}>
              <Text>{description}</Text>
              <Link href={backLinkUrl}>{backLinkLabel}</Link>
            </Flex>
          ) : (
            <Text centered>{description}</Text>
          )}
        </Flex>

        {hasSocials && (
          <Fragment>
            <SocialBtns />
            <Divider style={{ margin: 0 }}>or</Divider>
          </Fragment>
        )}
        {children}
      </Flex>
    </Card>
  )
}
