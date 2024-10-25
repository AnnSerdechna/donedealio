import { FC } from 'react';
import { ColorPicker, Button, Divider, Flex, Form, Input, Space } from 'antd'
import { DeleteTwoTone, LeftOutlined, PlusOutlined } from '@ant-design/icons';

import { Priority, Status } from '@/graphql/types';
import variables from '@/styles/variables.module.scss';

type StatusesFormListProps = {
  statusesData: Status[] | Priority[]
  submitLoading: boolean 
  onBack: VoidFunction
}

export const StatusFormList: FC<StatusesFormListProps> = ({ statusesData, submitLoading, onBack }) => {
  return (
    <Space direction={'vertical'}>
      <Form.List name="statuses" initialValue={statusesData}>
        {(fields, { add, remove }) => (
          <Space direction={'vertical'}>
            {fields.map(({ key, name, ...restField }) => {
              return (
                <Space key={key} size={4}>
                  <Form.Item
                    {...restField}
                    name={[name, 'id']}
                    style={{ display: 'none' }}
                  >
                    <Input hidden />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'color']}
                    rules={[{required: true }]}
                    noStyle
                  >
                    <ColorPicker />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'name']}
                    noStyle
                  >
                    <Input style={{ textTransform: 'capitalize' }} />
                  </Form.Item>
                  <Button
                    type={'text'}
                    icon={<DeleteTwoTone twoToneColor={variables.errorColor} />}
                    onClick={() => remove(name)}
                  />
                </Space>
              )
            })}
            <Form.Item noStyle>
              <Button 
                icon={<PlusOutlined />} 
                size={'large'} 
                style={{ width: '100%' }} 
                onClick={add}
              >
                New Label
              </Button>
            </Form.Item>
          </Space>
        )}
      </Form.List>
      <Divider style={{ margin: 0 }} />
      <Flex gap={4} align={'center'}>
        <Button icon={<LeftOutlined />} size={'large'} onClick={onBack} />

        <Form.Item noStyle>
          <Button
            htmlType="submit"
            type={'primary'}
            size={'large'}
            style={{ width: '90%' }}
            loading={submitLoading}
          >
            Apply
          </Button>
        </Form.Item>
      </Flex>
    </Space>
  )
}