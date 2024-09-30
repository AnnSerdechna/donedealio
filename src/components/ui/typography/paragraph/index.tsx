'use client';

import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { FC } from 'react';

import variables from '@/styles/variables.module.scss';

export const Paragraph: FC<TextProps> = ({ children, color, ...props }) => (
  <Typography.Paragraph 
    style={{ color: color ? color : variables.textSecondaryColor }}
    {...props}
  >
    {children}
  </Typography.Paragraph>
)