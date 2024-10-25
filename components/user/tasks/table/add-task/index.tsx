import { App, Form, Input } from 'antd';
import { FC, Fragment } from 'react';

import { Button, FormItem } from '@/components/ui';
import { PlusOutlined } from '@ant-design/icons';
import { useCreateTaskMutation } from '@/graphql/types';

export const AddTaskForm: FC<{ workspaceId: string, refetchTasks: VoidFunction }> = ({ workspaceId, refetchTasks  }) => {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const [createTask, { loading: createTaskLoading }] = useCreateTaskMutation();

  const handleCreateTask = async ({ task }: { task: string }) => {
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
      message.error('Create task failed!');
      console.log(error, 'Create task error!');
    }
  }

  return (
    <Fragment>
      <Form
        layout={'inline'}
        form={form}
        onFinish={handleCreateTask}
      >
        <Fragment>
          <FormItem
            name={'task'}
            rules={[
              {
                required: true,
                message: 'Please input task!'
              }
            ]}
          >
            <Input placeholder={'+ Add task'} allowClear />
          </FormItem>
          <FormItem>
            <Button
              type={'text'}
              size={'small'}
              htmlType={'submit'}
              icon={<PlusOutlined />}
              loading={createTaskLoading}
            />
          </FormItem>
        </Fragment>
      </Form>
    </Fragment>
  )
}
