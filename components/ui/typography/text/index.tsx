'use client';

import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { FC } from 'react';

export const Text: FC<TextProps & { centered?: boolean}> = ({ centered = false, children, ...props }) => (
  <Typography.Text style={{textAlign: centered ? 'center' : 'start'}} {...props}>
    {children}
  </Typography.Text>
)