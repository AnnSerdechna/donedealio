import { FC, Fragment } from 'react';
import { Button, Divider, Flex } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { StatusButton } from '../status-btn';
import { Status } from '@/graphql/types';

type StatusesContentProps = {
  taskId: string
  statusesData: Status[]
  onStatus: (statusId: number, taskId: string) => void
  onEdit: VoidFunction
};

export const StatusesContent: FC<StatusesContentProps> = ({ statusesData, taskId, onStatus, onEdit }) => {
  return (
    <Fragment>
      <Flex vertical gap={4}>
        {statusesData.map(item => (
          <StatusButton
            key={item?.id}
            text={item.name}
            backgroundColor={item.color}
            onClick={() => onStatus(item?.id, taskId)}
          />
        ))}
      </Flex>
      <Divider style={{ margin: '12px 0' }} />
      <Button
        icon={<EditOutlined />}
        type={'text'}
        size={'large'}
        style={{ width: '100%' }}
        onClick={onEdit}
      >
        Edit label
      </Button>
    </Fragment>
  )
}