'use client'

import { Avatar, Badge, ColorPicker, DatePicker, Button, Divider, Flex, Form, Input, message, notification, Popover, Space, Table, Tag, Typography, Upload } from "antd"
import type { TableProps } from 'antd';
import { MessageOutlined, UserAddOutlined, SearchOutlined, EditOutlined, DeleteTwoTone, PlusOutlined, FileAddOutlined, RightOutlined, DownOutlined } from '@ant-design/icons'
import { FC, Fragment, Key, useEffect, useState } from "react";
import { TableRowSelection } from "antd/es/table/interface";
import { useParams } from 'next/navigation';
import { Task, useDeleteManyTaskMutation, useTasksQuery, useWorkspaceQuery } from '@/graphql/types';
import { AddTaskForm } from '@/components/elements/tasks/add-task-form';
import { StatusButton } from './status-btn';
import { Button as ButtonUi } from '@/components/ui';

const { Text } = Typography;

const statuses = [
  {
    id: '1',
    status: 'Done',
    color: '#52c41a',
  },
  {
    id: '2',
    status: 'Working on it',
    color: '#fa8c16',
  },
  {
    id: '3',
    status: 'Not started',
    color: '#bfbfbf',
  },
  {
    id: '4',
    status: 'Stuck',
    color: '#fa541c',
  },
]

const priorities = [
  {
    id: '1',
    priority: 'Critical',
    color: '#22075e',
  },
  {
    id: '2',
    priority: 'High',
    color: '#531dab',
  },
  {
    id: '3',
    priority: 'Medium',
    color: '#9254de',
  },
  {
    id: '4',
    priority: 'Low',
    color: '#d3adf7',
  },
]

export const TasksTable: FC = () => {
  const { workspaceId } = useParams();
  const { data } = useWorkspaceQuery({ variables: { where: { id: workspaceId as string } } })
  const { data: tasksData, refetch, loading: dataLoading } = useTasksQuery({ variables: { workspaceId: workspaceId as string } });
  const [deleteTasks, { loading: deleteTasksLoading}] = useDeleteManyTaskMutation()
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [statusContent, setStatusContent] = useState<'change' | 'edit'>('change')
  const [priorityContent, setPriorityContent] = useState<'change' | 'edit'>('change')

  const changeStatusContent = (
    <Fragment>
      {statuses.map(item => (
        <StatusButton
          text={item.status}
          backgroundColor={item.color}
        />
      ))}
      <Divider style={{ margin: '12px 0' }} />
      <Button
        icon={<EditOutlined />}
        type={'text'}
        size={'large'}
        style={{ width: '100%' }}
        onClick={() => setStatusContent('edit')}
      >
        Edit label
      </Button>
    </Fragment>
  )

  const editStatusContent = (
    <Form
      onFinish={() => {
        setStatusContent('change')
      }}
    >
      <Space direction={'vertical'}>
        <Form.List name="statuses" initialValue={statuses}>
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
                      name={[name, 'status']}
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
    </Form>
  )

  const changePriorityContent = (
    <Fragment>
      {priorities.map(item => (
        <StatusButton
          text={item.priority}
          backgroundColor={item.color}
        />
      ))}
      <Divider style={{ margin: '12px 0' }} />
      <Button
        icon={<EditOutlined />}
        type={'text'}
        size={'large'}
        style={{ width: '100%' }}
        onClick={() => setPriorityContent('edit')}
      >
        Edit label
      </Button>
    </Fragment>
  )

  const editPriorityContent = (
    <Form
      onFinish={() => {
        setPriorityContent('change')
      }}
    >
      <Space direction={'vertical'}>
        <Form.List name="priorities" initialValue={priorities}>
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
                      name={[name, 'priority']}
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
    </Form>
  )

  const columns: TableProps<Task>['columns'] = [
    {
      title: 'Task',
      dataIndex: 'name',
      key: 'name',
    },
    Table.EXPAND_COLUMN,
    {
      title: '',
      dataIndex: 'message',
      key: 'message',
      align: 'center',
      render: (record) => (
        <Button
          icon={(
            <Badge count={0} size="small">
              <MessageOutlined style={{ fontSize: 20 }} />
            </Badge>
          )}
          type={'link'}
        />
      )
    },
    {
      title: 'Owner',
      dataIndex: 'user',
      key: 'user',
      align: 'center',
      render: () => (
        <Popover
          overlayStyle={{ width: 400 }}
          overlayInnerStyle={{ padding: 24 }}
          content={(
            <Space direction={'vertical'} size={16} style={{ width: '100%' }}>
              <Flex wrap gap="small">
                <Tag
                  icon={<Avatar size={24} icon={<UserAddOutlined />} />}
                  color="#bbb"
                  style={{ borderRadius: '99px', margin: 0 }}
                  closable
                  bordered
                  onClose={() => { }}
                >
                  {' '}{'Anna Serdechna'}
                </Tag>
              </Flex>

              <Input
                placeholder={'Search names, roles or teams'}
                size={'large'}
                prefix={<SearchOutlined style={{ fontSize: 20 }} />}
              />

              <Text>Suggested people</Text>

              <Button
                icon={<UserAddOutlined />}
                type={'text'}
                size={'large'}
                style={{ width: '100%' }}
              >
                Invite a new member by email
              </Button>
            </Space>
          )}
          trigger={'click'}
          placement={'bottom'}
        >
          <Avatar size={32} icon={<UserAddOutlined />} />
        </Popover>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      align: 'center',
      render: (status) => (
        <Popover
          placement={'bottom'}
          trigger={'click'}
          overlayStyle={{ width: 250 }}
          content={(
            <Space size={8} direction={'vertical'} style={{ width: '100%' }}>
              {statusContent === 'change' ? changeStatusContent : editStatusContent}
            </Space>
          )}
        >
          <StatusButton text={status?.name} backgroundColor={status?.color ?? ''} />
        </Popover>
      )
    },
    {
      title: 'Due date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      align: 'center',
      width: 150,
      render: () => <DatePicker format={'DD MMM'} />
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      width: 150,
      align: 'center',
      render: (priority) => (
        <Popover
          placement={'bottom'}
          trigger={'click'}
          overlayStyle={{ width: 250 }}
          content={(
            <Space size={8} direction={'vertical'} style={{ width: '100%' }}>
              {priorityContent === 'change' ? changePriorityContent : editPriorityContent}
            </Space>
          )}
        >
          <StatusButton text={priority?.name} backgroundColor={priority?.color ?? ''} />
        </Popover>
      )
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',

    },
    {
      title: 'Files',
      dataIndex: 'files',
      key: 'files',
      align: 'center',
      render: () => (
        <Upload>
          <Button type={'link'} icon={<FileAddOutlined style={{ fontSize: 18, color: '#000' }} />} />
        </Upload>
      )
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleRemoveSelectedTasks = async () => {
    try {
      await deleteTasks({
        variables: {
          where: {
            id: {
              in: selectedRowKeys as string[]
            }
          }
        }
      });

      refetch();
      setSelectedRowKeys([]);
    } catch(error) {
      console.log(error, 'Delete tasks error!');
      messageApi.error('Delete selected tasks failed!')
    }
  }

  const rowSelection: TableRowSelection<Task> = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <Flex vertical gap={24}>
      {contextHolder}
      <Table
        dataSource={tasksData?.tasks as Task[]}
        columns={columns}
        loading={dataLoading}
        size={'small'}
        pagination={false}
        rowSelection={rowSelection}
        rowKey={(record) => record.id}
        expandable={{
          expandedRowRender: (record) => (
            <Table
              dataSource={[]}
              columns={columns}
              size={'small'}
              pagination={false}
            />
          ),
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <DownOutlined onClick={e => onExpand(record, e)} />
            ) : (
              <RightOutlined onClick={e => onExpand(record, e)} />
            )
        }}
        // summary={(pageData) => {
        //   let totalBorrow = 0;
        //   let totalRepayment = 0;
        //   pageData.forEach(({ borrow, repayment }) => {
        //     totalBorrow += borrow;
        //     totalRepayment += repayment;
        //   });
        //   return (
        //     <>
        //       <Table.Summary.Row>
        //         <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
        //         <Table.Summary.Cell index={1}>
        //           <Text type="danger">{totalBorrow}</Text>
        //         </Table.Summary.Cell>
        //         <Table.Summary.Cell index={2}>
        //           <Text>{totalRepayment}</Text>
        //         </Table.Summary.Cell>
        //       </Table.Summary.Row>
        //       <Table.Summary.Row>
        //         <Table.Summary.Cell index={0}>Balance</Table.Summary.Cell>
        //         <Table.Summary.Cell index={1} colSpan={2}>
        //           <Text type="danger">{totalBorrow - totalRepayment}</Text>
        //         </Table.Summary.Cell>
        //       </Table.Summary.Row>
        //     </>
        //   );
        // }}
        footer={() => <AddTaskForm workspaceId={data?.workspace?.id as string} refetchTasks={refetch} />}
      />
      {!!selectedRowKeys.length && (
        <div style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
          <Flex justify={'space-between'}>
            <Flex gap={8}>
              {selectedRowKeys.map(item => (
                <span
                  key={item}
                  style={{ display: 'block', width: 8, height: 8, background: 'blue', borderRadius: '50%' }}
                />
              ))}
            </Flex>
            <ButtonUi
              text={'Delete'}
              type={'text'}
              icon={<DeleteTwoTone />}
              wide={false}
              loading={deleteTasksLoading}
              onClick={handleRemoveSelectedTasks}
            />
          </Flex>
        </div>
      )}
    </Flex>
  );
}

