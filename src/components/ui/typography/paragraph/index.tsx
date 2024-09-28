'use client';

import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { FC } from 'react';

export const Paragraph: FC<TextProps> = ({ children, ...props }) => (
  <Typography.Paragraph {...props}>
    {children}
  </Typography.Paragraph>
)