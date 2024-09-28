'use client';

import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import { FC } from 'react';

export const Title : FC<TitleProps>= ({ children, ...props }) => (
  <Typography.Title {...props}>
    {children}
  </Typography.Title>
)