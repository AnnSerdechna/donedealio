import { Button, FormItem } from '@/components/ui';
import { Input } from 'antd'
import { FC, Fragment } from 'react'
import { PlusOutlined } from '@ant-design/icons';

export const AddTaskFormContent: FC<{ loading: boolean }> = ({ loading }) => {
  return (
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
          loading={loading}
        />
      </FormItem>
    </Fragment>
  )
}
