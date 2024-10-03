import { Form, message } from 'antd'
import { FC, Fragment } from 'react'
import { useCreateOneTaskMutation } from '@/graphql/types';
import { AddTaskFormContent } from '../add-task-form-content';

export const AddTaskForm: FC<{ workspaceId: string, refetchTasks: VoidFunction }> = ({ workspaceId, refetchTasks  }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [createTask, { loading: createTaskLoading }] = useCreateOneTaskMutation();

  const handleAddtask = async ({ task }: { task: string }) => {
    try {
      await createTask({
        variables: {
          data: {
            name: task,
            workspace: {
              connect: { id: workspaceId}
            },
          }
        }
      });
      refetchTasks();
      form.resetFields();
    } catch (error) {
      messageApi.error('Create task failed!');
      console.log(error, 'Create task error!');
    }
  }

  return (
    <Fragment>
      {contextHolder}
      <Form
        layout={'inline'}
        form={form}
        onFinish={handleAddtask}
      >
        <AddTaskFormContent loading={createTaskLoading} />
      </Form>
    </Fragment>
  )
}
