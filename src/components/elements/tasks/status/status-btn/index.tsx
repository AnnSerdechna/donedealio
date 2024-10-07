import { Radio } from 'antd';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
import { FC } from 'react';

type StatusBtnProps = RadioButtonProps & {
  label: string
  backgroundColor: string
};

export const StatusBtn: FC<StatusBtnProps> = ({ label, backgroundColor, ...props }) => (
  <Radio.Button
    style={{
      width: '100%',
      height: 40,
      background: backgroundColor,
      border: `1px solid ${!!label ? backgroundColor : '#d9d9d9'}`
    }}
    {...props}
  >
    {label}
  </Radio.Button>
)