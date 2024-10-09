'use client';

import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { FC } from 'react';

export const Paragraph: FC<TextProps> = ({ children, color, ...props }) => (
  <Typography.Paragraph 
    {...props}
  >
    {children}
  </Typography.Paragraph>
)