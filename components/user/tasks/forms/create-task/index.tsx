'use client';

import { App, DatePicker, Flex, Form, FormInstance, Input, Upload } from 'antd';
import { FC } from 'react';
import { Dayjs } from 'dayjs';
import { useParams } from 'next/navigation';

import { Priority, Status, useCreateOneTaskMutation, usePrioritiesQuery, useStatusesQuery } from '@/graphql/types';
import { Button, FormItem } from '@/components/ui';
import { getFormattedDate } from '@/functions/getFormattedDate';
import { StatusField } from '@/components/user';
import { FileAddOutlined } from '@ant-design/icons';

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
  const { data: statusesData } = useStatusesQuery();
  const { data: prioritiesData } = usePrioritiesQuery();

  const statusValue = Form.useWatch('status', form);
  const priorityValue = Form.useWatch('priority', form);

  const handleCloseForm = () => {
    form.resetFields();
    onCloseForm();
  };

  const hanldeCreateTask = async (values: FormData) => {
    let data = {
      workspace: { connect: { id: workspaceId as string } },
      name: values.task,
      note: values?.notes,
      dueDate: getFormattedDate(values?.dueDate)
    };

    if (!!values?.status?.id) {
      data = Object.assign(data, { status: { connect: { id: values?.status?.id } } })
    };

    if (!!values?.priority?.id) {
      data = Object.assign(data, { priority: { connect: { id: values?.priority?.id } } })
    };

    try {
      
      await createTask({variables: { data }});
      refetchTasks();
      message.success('Task was created successfully!');
    } catch (error) {
      console.log(error, 'Create task error');
      message.error('Something went wrong!');
    } finally {
      handleCloseForm();

      console.log(data, 'data')
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
              data={prioritiesData?.priorities as Priority[]}
              status={priorityValue as Priority}
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
          <FormItem
            name={'files'}
            label={'Files'}
          >
            <Upload>
              <Button icon={<FileAddOutlined style={{ color: '#d9d9d9' }} />} type={'default'} ghost />
            </Upload>
          </FormItem>
        </Flex>

        <Flex justify={'end'} gap={8}>
          <Button text={'Cancel'} type={'default'} onClick={handleCloseForm} wide={false} />
          <Button text={'Create'} type={'primary'} htmlType={'submit'} wide={false} loading={loading} />
        </Flex>
      </Flex>
    </Form>
  )
}