'use client'

import { Avatar, Badge, Button, ColorPicker, DatePicker, Divider, Flex, Form, Input, Popover, Space, Table, Tag, Typography, Upload } from "antd"
import type { ButtonProps, TableProps } from 'antd';
import { MessageOutlined, UserAddOutlined, SearchOutlined, EditOutlined, DeleteTwoTone, PlusOutlined, FileAddOutlined, RightOutlined, DownOutlined } from '@ant-design/icons'
import { FC, Fragment, Key, useState } from "react";
import { TableRowSelection } from "antd/es/table/interface";
import { useParams } from 'next/navigation';
import { FormItem, Title } from '@/components/ui';
import { Task, TaskCreateInput, useCreateOneTaskMutation, useTasksQuery, useWorkspaceQuery } from '@/graphql/types';
import { useSession } from 'next-auth/react';
import { AddTaskForm } from '@/components/elements/tasks/add-task-form';
import { equal } from 'assert';
import { equals } from 'class-validator';
import { TasksTable } from '@/components/elements';

const { Text } = Typography

type StatusType = 'Done' | 'Working on it' | 'Not started' | 'Stuck' | string
type PriorityType = 'Critical' | 'High' | 'Medium' | 'Low' | string

interface StatusesProps {
  id: string
  status: StatusType
  color: string
}

interface PriorityProps {
  id: string
  priority: PriorityType
  color: string
}

interface TaskDataProps {
  key: Key
  id: string
  task: string
  owner: string
  status: StatusType
  dueDate: string
  priority: PriorityType
  notes: string
  files: Array<string> | null
  messages: Array<string> | null
}

const statuses: StatusesProps[] = [
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

const priorities: PriorityProps[] = [
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

const dataSource: TaskDataProps[] = [
  {
    id: '1',
    key: '1',
    task: 'Make a coffee',
    owner: '',
    status: 'Done',
    dueDate: '7 Jul',
    priority: 'Critical',
    notes: 'Some notes',
    files: ['web.pdf'],
    messages: ["some message", 'updated message']
  },
  {
    id: '2',
    key: '2',
    task: 'Do something',
    owner: '',
    status: 'Working on it',
    dueDate: '12 Sep',
    priority: 'High',
    messages: null,
    notes: '',
    files: null,
  },
  {
    id: '3',
    key: '3',
    task: 'Do something',
    owner: '',
    status: 'Not started',
    dueDate: '12 Sep',
    priority: 'Medium',
    messages: null,
    notes: '',
    files: null,
  },
  {
    id: '4',
    key: '4',
    task: 'Do something',
    owner: '',
    status: 'Stuck',
    dueDate: '12 Sep',
    priority: 'Low',
    messages: null,
    notes: '',
    files: null,
  },
];

const StatusButton: FC<ButtonProps & { text: string, backgroundColor: string }> = ({ text, backgroundColor, ...props }) => (
  <Button
    style={{ background: backgroundColor }}
    className={'status-button'}
    // size={'middle'} 
    {...props}
  >
    {text}
  </Button>
)

export const WorkspacePage: FC = () => {
  const { workspaceId } = useParams();
  const { data } = useWorkspaceQuery({ variables: { where: { id: workspaceId as string } } })
  const { data: tasksData, refetch, loading: dataLoading } = useTasksQuery({ variables: { workspaceId: workspaceId as string}})
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

  const subColumns: TableProps<TaskDataProps>['columns'] = [
    {
      title: 'Subtask',
      dataIndex: 'task',
      key: 'task',
    },
    {
      title: '',
      dataIndex: 'messages',
      key: 'messages',
      align: 'center',
      render: (messages) => (
        <Button
          icon={(
            <Badge count={messages?.length} size="small">
              <MessageOutlined style={{ fontSize: 20 }} />
            </Badge>
          )}
          type={'link'}
        />
      )
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
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
          <StatusButton text={status} backgroundColor={statuses.find(item => item.status === status)?.color ?? ''} />
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
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<Task> = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <Flex vertical gap={24}>
      <Title level={4}>Workspace #{workspaceId}</Title>
      <TasksTable />
    </Flex>
  );
}

