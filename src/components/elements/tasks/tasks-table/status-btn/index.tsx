import { Button, ButtonProps } from 'antd';
import { FC } from 'react';

type StatusButtonProps = ButtonProps & { text: string, backgroundColor: string };

export const StatusButton: FC<StatusButtonProps> = ({ text, backgroundColor, ...props }) => (
  <Button
    style={{ background: backgroundColor }}
    className={'status-button'}
    {...props}
  >
    {text}
  </Button>
)