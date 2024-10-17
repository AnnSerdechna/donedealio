import { Popover } from 'antd';
import { FC, ReactNode } from 'react';

import { RadioButtonProps } from 'antd/es/radio/radioButton';
import { Priority, Status } from '@/graphql/types';
import { StatusBtn, StatusBtnProps } from '../status-btn';

type StatusPopoverProps = RadioButtonProps & Pick<StatusBtnProps, 'size'> & {
  content: ReactNode
  status: Status | Priority
  size?: 'large' | 'medium'
}

export const StatusPopover: FC<StatusPopoverProps> = ({ status, content, size, ...props }) => {
  return (
    <Popover
      placement={'bottom'}
      trigger={'click'}
      overlayStyle={{ width: 250 }}
      content={content}
    >
      <StatusBtn 
        value={status}
        label={status?.name}
        backgroundColor={status?.color ?? ''}
        size={size}
        {...props}
      />
    </Popover>
  )
}