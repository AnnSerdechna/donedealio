import { HomeLayout } from '@/components/layout';
import { Col, Flex } from 'antd';
import Image from 'next/image';

import AuthImage from '@/assets/images/email.png';
import styles from './page.module.scss';
import { Button, Paragraph, Title } from '@/components/ui';

export default function Home() {
  return (
    <HomeLayout>
      <Flex className={styles.contentWrap} justify={'space-between'}>
        <Col span={11} className={styles.contentCol}>
          <Flex align={'center'} justify={'center'} className={styles.content}>
            <Col span={20}>
              <Flex vertical gap={24}>
                <Title>
                  Introduce Your Product Quickly & Effectively
                </Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </Paragraph>

                <Flex gap={8}>
                  <Button wide={false} text={'Learn more'} />
                  <Button wide={false} text={'Start free treal'} />
                </Flex>
              </Flex>
            </Col>
          </Flex>
        </Col>
        <Col span={13} className={styles.contentCol}>
          <Flex align={'center'} justify={'end'} className={styles.content}>
            <Image
              src={AuthImage.src}
              alt={'Auth image'}
              quality={80}
              width={480}
              height={315}
              sizes="(max-width: 768px) 70vh, 33vw"
            />
          </Flex>
        </Col>
      </Flex>
    </HomeLayout>
  );
};