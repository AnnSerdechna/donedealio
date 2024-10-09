'use client';

import { App, Flex, Form, FormInstance } from 'antd';
import { FC } from 'react';
import { Dayjs } from 'dayjs';
import { useParams } from 'next/navigation';

import { TaskFormContent } from '../task-form-content';
import { Priority, Status, useCreateOneTaskMutation } from '@/graphql/types';
import { Button } from '@/components/ui';
import { getFormattedDate } from '@/functions/getFormattedDate';

type CreateTaskFormProps = {
  form: FormInstance
  refetchTasks: VoidFunction
  onCloseForm: VoidFunction
};

type FormData = {
  task: string
  status: Status
  priority: Priority
  dueDate: Dayjs
  notes: string
};

export const CreateTaskForm: FC<CreateTaskFormProps> = ({ form, refetchTasks, onCloseForm }) => {
  const { message } = App.useApp();
  const { workspaceId } = useParams();
  const [createTask, { loading }] = useCreateOneTaskMutation();

  const handleCloseForm = () => {
    form.resetFields();
    onCloseForm();
  };

  const hanldeCreateTask = async (values: FormData) => {
    try {
      await createTask({
        variables: {
          data: {
            workspace: { connect: { id: workspaceId as string } },
            name: values.task,
            status: { connect: { id: values?.status?.id } },
            priority: { connect: { id: values?.priority?.id } },
            note: values?.notes,
            dueDate: getFormattedDate(values?.dueDate)
          }
        }
      });
      refetchTasks();
      message.success('Task was created successfully!');
    } catch (error) {
      console.log(error, 'Create task error');
      message.error('Something went wrong!');
    } finally {
      handleCloseForm();
    }
  };

  return (
    <Form
      form={form}
      onFinish={hanldeCreateTask}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      labelAlign={'left'}
      colon={false}
      size={'large'}
      requiredMark={false}
    >
      <Flex vertical gap={32}>
        <TaskFormContent form={form} />

        <Flex justify={'end'} gap={8}>
          <Button text={'Cancel'} type={'default'} onClick={handleCloseForm} wide={false} />
          <Button text={'Create'} type={'primary'} htmlType={'submit'} wide={false} loading={loading} />
        </Flex>
      </Flex>
    </Form>
  )
}