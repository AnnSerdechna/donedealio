import { Radio } from 'antd';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
import { FC } from 'react';

import styles from './index.module.scss';

export type StatusBtnProps = RadioButtonProps & {
  label: string
  size?: 'large' | 'medium'
  backgroundColor: string
};

export const StatusBtn: FC<StatusBtnProps> = ({ label, backgroundColor, size = 'medium', ...props }) => (
  <Radio.Button
    style={{
      height: size === 'large' ? 40 : 32,
      background: backgroundColor,
      border: `1px solid ${!!label ? backgroundColor : '#d9d9d9'}`,
    }}
    className={styles.statusBtn}
    {...props}
  >
    {label}
  </Radio.Button>
)