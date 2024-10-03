import { Button, ColorPicker, Divider, Form, FormProps, Input, Space } from 'antd';
import { FC } from 'react'
import { DeleteTwoTone, PlusOutlined } from '@ant-design/icons';
import { Priority, Status } from '@/graphql/types';

type StatusFormProps = {
  initialData: Status[] | Priority[]
}

export const StatusFormList: FC<StatusFormProps> = ({ initialData  }) => {
  return (
    <Space direction={'vertical'}>
      <Form.List name="statuses" initialValue={initialData}>
        {(fields, { add, remove }) => (
          <Space direction={'vertical'}>
            {fields.map(({ key, name, ...restField }) => {
              return (
                <Space key={key} size={4}>
                  <Form.Item
                    {...restField}
                    name={[name, 'color']}
                    noStyle
                  >
                    <ColorPicker />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'name']}
                    noStyle
                  >
                    <Input />
                  </Form.Item>
                  <Button type={'text'} icon={<DeleteTwoTone twoToneColor="#f5222d" style={{ color: 'red' }} />} onClick={() => remove(name)} />
                </Space>
              )
            })}
            <Form.Item noStyle>
              <Button icon={<PlusOutlined />} size={'large'} style={{ width: '100%' }} onClick={add} >New Label</Button>
            </Form.Item>
          </Space>
        )}
      </Form.List>
      <Divider style={{ margin: 0 }} />
      <Form.Item noStyle>
        <Button htmlType="submit" type={'text'} size={'large'} style={{ width: '100%' }}>Apply</Button>
      </Form.Item>
    </Space>
  )
}