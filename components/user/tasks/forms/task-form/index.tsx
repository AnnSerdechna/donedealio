import { DatePicker, Flex, Form, FormInstance, FormProps, Input } from 'antd';
import { FC } from 'react';
import { Dayjs } from 'dayjs';

import { Priority, Status, StatusType, useStatusesQuery } from '@/graphql/types';
import { Button, FormItem } from '@/components/ui';
import { FilesUpload, FilesUploadProps } from '../../data-fields/files';
import { StatusField } from '../../data-fields/status';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export type TaskFormProps = FormProps & FilesUploadProps & {
  form: FormInstance
  action: 'update' | 'create'
  submitLoading: boolean
  refetchTasks: VoidFunction
  onCancel: VoidFunction
};

export type FormData = {
  task: string
  status: Status
  priority: Priority
  dueDate: Dayjs
  notes: string
};

export const TaskForm: FC<TaskFormProps> = ({ 
  form, 
  files, 
  action ='create', 
  taskId, 
  submitLoading, 
  fileList,
  setFileList,
  refetchTasks, 
  onCancel ,
  ...props
}) => {
  const user = useCurrentUser();
  const { data: statusesData } = useStatusesQuery({
    variables: {
      where: {
        userId: {
          equals: user.id
        },
        type: { equals: StatusType.Status }
      }
    }
  });
  const { data: prioritiesData } = useStatusesQuery({
    variables: {
      where: {
        userId: {
          equals: user.id
        },
        type: { equals: StatusType.Priority }
      }
    }
  });

  const statusValue = Form.useWatch('status', form);
  const priorityValue = Form.useWatch('priority', form);

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      labelAlign={'left'}
      colon={false}
      size={'large'}
      requiredMark={false}
      {...props}
    >
      <Flex vertical gap={32}>
        <Flex vertical>
          <FormItem
            name={'task'}
            label={'Task'}
            rules={[
              {
                required: true,
                message: 'Please enter task name'
              }
            ]}
          >
            <Input />
          </FormItem>

          <FormItem
            name={'status'}
            label={'Status'}
          >
            <StatusField
              form={form}
              data={statusesData?.statuses as Status[]}
              status={statusValue as Status}
              updatedField={'status'}
              size={'large'}
            />
          </FormItem>

          <FormItem
            name={'dueDate'}
            label={'Due date'}
          >
            <DatePicker
              format={'DD MMM'}
              showNow={false}
              placeholder=''
              style={{ width: '100%' }}
            />
          </FormItem>

          <FormItem
            name={'priority'}
            label={'Priority'}
          >
            <StatusField
              form={form}
              data={prioritiesData?.statuses as Status[]}
              status={priorityValue as Status}
              updatedField={'priority'}
              size={'large'}
            />
          </FormItem>
          <FormItem
            name={'notes'}
            label={'Notes'}
          >
            <Input />
          </FormItem>
          <FormItem label={'Files'}>
            <FilesUpload
              files={files}
              taskId={taskId}
              fileList={fileList}
              setFileList={setFileList}
              refetch={refetchTasks}
            />
          </FormItem>
        </Flex>

        <Flex justify={'end'} gap={8}>
          <Button text={'Cancel'} type={'default'} onClick={onCancel} wide={false} />
          <Button
            text={action === 'update' ? 'Save' : 'Create'}
            type={'primary'}
            htmlType={'submit'}
            wide={false}
            loading={submitLoading}
          />
        </Flex>
      </Flex>
    </Form>
  )
}