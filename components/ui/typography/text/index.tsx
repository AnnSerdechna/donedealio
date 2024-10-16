'use client';

import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { FC } from 'react';

export const Text: FC<TextProps> = ({ children, ...props }) => (
  <Typography.Text {...props}>
    {children}
  </Typography.Text>
)