import { Radio } from 'antd';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
import { FC } from 'react';

export type StatusBtnProps = RadioButtonProps & {
  label: string
  size?: 'large' | 'medium'
  backgroundColor: string
};

export const StatusBtn: FC<StatusBtnProps> = ({ label, backgroundColor, size = 'medium', ...props }) => (
  <Radio.Button
    style={{
      width: '100%',
      height: size === 'large' ? 40 : 32,
      background: backgroundColor,
      border: `1px solid ${!!label ? backgroundColor : '#d9d9d9'}`
    }}
    {...props}
  >
    {label}
  </Radio.Button>
)