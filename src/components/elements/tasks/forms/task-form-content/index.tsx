import { FC } from 'react';
import { Button, DatePicker, Flex, Form, FormInstance, Input, Upload } from 'antd'
import { FileAddOutlined } from '@ant-design/icons';

import { FormItem } from '@/components/ui'
import { Priority, Status, usePrioritiesQuery, useStatusesQuery } from '@/graphql/types';
import { StatusField } from '../../data-fields/status';

export const TaskFormContent: FC<{ form: FormInstance }> = ({ form }) => {
  const { data: statusesData } = useStatusesQuery();
  const { data: prioritiesData } = usePrioritiesQuery();

  const statusValue = Form.useWatch('status', form);
  const priorityValue = Form.useWatch('priority', form);
  const dueDate = Form.useWatch('dueDate', form);

  return (
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
  )
}