import { Popover, Space } from 'antd';
import { FC, ReactNode } from 'react';

import { StatusButton } from '../status-btn';

type StatusPopoverProps = {
  content: ReactNode
  statusName: string
  statusColor: string
}

export const StatusPopover: FC<StatusPopoverProps> = ({ statusName, statusColor, content }) => {
  return (
    <Popover
      placement={'bottom'}
      trigger={'click'}
      overlayStyle={{ width: 250 }}
      content={(
        <Space size={8} direction={'vertical'} style={{ width: '100%' }}>
          {content}
        </Space>
      )}
    >
      <StatusButton
        text={statusName}
        backgroundColor={statusColor}
      />
    </Popover>
  )
}