import { Popover } from 'antd';
import { FC, ReactNode } from 'react';

import { RadioButtonProps } from 'antd/es/radio/radioButton';
import { Priority, Status } from '@/graphql/types';
import { StatusBtn } from '../status-btn';

type StatusPopoverProps = RadioButtonProps & {
  content: ReactNode
  status: Status | Priority
}

export const StatusPopover: FC<StatusPopoverProps> = ({ status, content, ...props }) => {
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
        {...props}
      />
    </Popover>
  )
}