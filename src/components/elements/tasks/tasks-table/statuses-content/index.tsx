import { FC, Fragment } from 'react';
import { StatusButton } from '../status-btn';
import { Button, Divider, Flex } from 'antd';
import { Priority, Status } from '@/graphql/types';
import { EditOutlined } from '@ant-design/icons';

type StatusesContentProps = {
  taskId: string
  statusesData: Status[] | Priority[]
  onStatus: (statusId: number, taskId: string) => void
  onEdit: VoidFunction
};

export const StatusesContent: FC<StatusesContentProps> = ({ statusesData, taskId, onStatus, onEdit }) => {
  return (
    <Fragment>
      <Flex vertical gap={4}>
        {statusesData.map(item => (
          <StatusButton
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