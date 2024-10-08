import { App, Flex, Form, FormInstance } from 'antd';
import { FC, useState } from 'react';
import { Dayjs } from 'dayjs';

import { TaskFormContent } from '../task-form-content';
import { Priority, Status, useUpdateOneTaskMutation } from '@/graphql/types';
import { Button } from '@/components/ui';
import { getFormattedDate } from '@/functions/getFormattedDate';

type CreateTaskFormProps = {
  taskId: string
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

export const UpdateTaskForm: FC<CreateTaskFormProps> = ({ form, taskId, refetchTasks, onCloseForm }) => {
  const { message } = App.useApp();
  const [updateTask, { loading }] = useUpdateOneTaskMutation();

  const handleCloseForm = () => {
    form.resetFields();
    onCloseForm();
  };

  const hanldeUpdateTask = async (values: FormData) => {
    try {
      await updateTask({
        variables: {
          data: {
            name: { set: values.task },
            status: { connect: { id: values?.status?.id } },
            priority: { connect: { id: values?.priority?.id } },
            note: { set: values?.notes },
            dueDate: { set: getFormattedDate(values?.dueDate) }
          },
          where: {
            id: taskId
          }
        }
      });
      handleCloseForm();
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
      onFinish={hanldeUpdateTask}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      labelAlign={'left'}
      colon={false}
      size={'large'}
    >
      <Flex vertical gap={32}>
        <TaskFormContent form={form} />

        <Flex justify={'end'} gap={8}>
          <Button text={'Cancel'} type={'default'} onClick={handleCloseForm} wide={false} />
          <Button
            text={'Update'}
            type={'primary'}
            htmlType={'submit'}
            wide={false}
            loading={loading}
          />
        </Flex>
      </Flex>
    </Form>
  )
}