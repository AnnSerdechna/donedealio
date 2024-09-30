'use client';

import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import { FC } from 'react';
import classNames from 'classnames';

import variables from '@/styles/variables.module.scss';
import styles from './index.module.scss';

export const Title: FC<TitleProps & { centered?: boolean }> = ({ children, centered = false, ...props }) => (
  <Typography.Title 
    className={classNames(
      styles.title, 
      {[styles.centered] : centered},
    )}
    style={{ color: variables.textColor}}
    {...props}
  >
    {children}
  </Typography.Title>
)