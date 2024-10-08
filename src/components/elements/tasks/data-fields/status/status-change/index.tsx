import { App, Divider, Flex, FormInstance, Radio, RadioGroupProps } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { FC } from 'react';

import { Button } from '@/components/ui';
import { Priority, Status, useUpdateOneTaskMutation } from '@/graphql/types';
import { AggregationColor } from 'antd/es/color-picker/color';
import { StatusBtn } from '../status-btn';

export type StatusChangeProps = RadioGroupProps & {
  data: Status[] | Priority[]
  taskId?: string
  form?: FormInstance
  updatedField: 'status' | 'priority'
  onEdit: VoidFunction
  refetchTask?: VoidFunction
};

export const StatusChange: FC<StatusChangeProps> = ({ 
  form, 
  updatedField, 
  data, 
  taskId, 
  refetchTask, 
  onEdit, 
  ...props 
}) => {
  const { message } = App.useApp();
  const [updateTask] = useUpdateOneTaskMutation();

  const handleUpdateTaskStatus = async (status: { id: number, name: string, color: string | AggregationColor }) => {
    if (!!taskId) {
      try {
        await updateTask({
          variables: {
            data: {
              [updatedField]: {
                connect: { id: status?.id }
              }
            },
            where: {
              id: taskId
            }
          }
        });
        
        if (!!refetchTask) {
          refetchTask()
        };
        message.success('Status was updated success!')
      } catch (error) {
        console.log(error, 'Update status error!')
      }
    } else {
      form?.setFieldValue(updatedField, status)
    }
  };

  return (
    <Radio.Group
      optionType={'button'}
      buttonStyle={'solid'}
      size={'large'}
      style={{width: '100%'}}
      {...props}
    >
      <Flex vertical gap={4}>
        {data?.map(status => (
          <StatusBtn
            key={status?.id}
            value={status}
            label={status?.name}
            backgroundColor={status?.color}
            size={'large'}
            onChange={() => handleUpdateTaskStatus(status)}
          />
        ))}
        <Divider style={{ margin: '8px 0' }} />
        <Button
          text={'Edit label'}
          icon={<EditOutlined />}
          type={'text'}
          size={'large'}
          style={{ width: '100%' }}
          onClick={onEdit}
        />
      </Flex>
    </Radio.Group>
  )
}