import { App } from 'antd';
import { FC } from 'react';

import { getFormattedDate } from '@/functions/getFormattedDate';
import { FormData, TaskForm, TaskFormProps } from '@/components/user/tasks';
import { useUpdateTaskMutation } from '@/graphql/types';

export const UpdateTaskForm: FC<Omit<TaskFormProps, 'action' | 'submitLoading'>> = ({ 
  form, 
  files, 
  taskId, 
  refetchTasks, 
  onCancel,
  ...props
}) => {
  const { message } = App.useApp();
  const [updateTask, { loading }] = useUpdateTaskMutation();

  const handleCloseForm = () => {
    form.resetFields();
    onCancel();
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
    <TaskForm
      form={form}
      taskId={taskId}
      files={files}
      action={'update'}
      submitLoading={loading}
      onCancel={onCancel}
      refetchTasks={refetchTasks}
      onFinish={hanldeUpdateTask}
      {...props}
     />
  )
}