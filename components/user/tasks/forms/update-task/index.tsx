import { App, Flex, Form, FormInstance } from 'antd';
import { FC } from 'react';
import { Dayjs } from 'dayjs';

import { Priority, Status, useUpdateOneTaskMutation } from '@/graphql/types';
import { Button } from '@/components/ui';
import { getFormattedDate } from '@/functions/getFormattedDate';
import { TaskFormContent } from '../task-form-content';

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
    let data = {
      name: { set: values.task },
      note: { set: values?.notes },
      dueDate: { set: getFormattedDate(values?.dueDate) }
    };

    if (!!values?.status?.id) {
      data = Object.assign(data, { status: { connect: { id: values?.status?.id } } })
    };

    if (!!values?.priority?.id) {
      data = Object.assign(data, { priority: { connect: { id: values?.priority?.id } } })
    };

    try {
      await updateTask({
        variables: {
          data,
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
      requiredMark={false}
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