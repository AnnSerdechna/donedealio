'use client'
import { FC, Fragment, useState } from "react";
import { useParams } from 'next/navigation';

import { Avatar, Badge, DatePicker, Button, Flex, Form, Input, message, Popover, Space, Table, Tag, Typography, Upload } from "antd"
import type { TableProps } from 'antd';
import { TableRowSelection } from "antd/es/table/interface";
import dayjs from 'dayjs';
import { 
  MessageOutlined, 
  UserAddOutlined, 
  SearchOutlined, 
  DeleteTwoTone, 
  FileAddOutlined, 
  RightOutlined, 
  DownOutlined 
  } from '@ant-design/icons'
import { 
  Priority, 
  Status, 
  Task, 
  useDeleteManyTaskMutation, 
  usePrioritiesQuery, 
  useStatusesQuery, 
  useTasksQuery, 
  useUpdateOneTaskMutation, 
  useWorkspaceQuery 
} from '@/graphql/types';

import { AddTaskForm } from '@/components/elements/tasks/add-task-form';
import { Button as ButtonUi } from '@/components/ui';
import { StatusFormList } from './status-form-list';
import { StatusPopover } from './status-popover';
import { StatusesContent } from './statuses-content';

const { Text } = Typography;

export const TasksTable: FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { workspaceId } = useParams();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [statusContent, setStatusContent] = useState<'change' | 'edit'>('change')
  const [priorityContent, setPriorityContent] = useState<'change' | 'edit'>('change')

  const { data: statusesData } = useStatusesQuery();
  const { data: prioritiesData } = usePrioritiesQuery();
  const { data } = useWorkspaceQuery({ 
    variables: { 
      where: { 
        id: workspaceId as string 
  }}});
  const { data: tasksData, refetch, loading: dataLoading } = useTasksQuery({ 
    variables: { 
      workspaceId: workspaceId as string 
  }});
  const [deleteTasks, { loading: deleteTasksLoading}] = useDeleteManyTaskMutation();
  const [updateTask] = useUpdateOneTaskMutation();

  const handleUpdateTaskStatus = async (statusId: number, taskId: string) => {
    try {
      await updateTask({
        variables: {
          data: {
            status: {
              connect: {
                id: statusId 
              }
            }
          },
          where: {
            id: taskId
          },
        }
      });
      refetch();
    } catch (error) {
        console.log(error, 'Update task status error!');
        messageApi.error('Update status failed!');
    }
  };

  const handleUpdateTaskPriority = async (priorityId: number, taskId: string) => {
    try {
      await updateTask({
        variables: {
          data: {
            priority: {
              connect: {
                id: priorityId
              }
            }
          },
          where: {
            id: taskId
          },
        }
      });
      refetch();
    } catch (error) {
      console.log(error, 'Update task priority error!');
      messageApi.error('Update priority failed!');
    }
  };

  const handleUpdateTaskDuedate = async (date: any, taskId: string) => {
    try {
      await updateTask({
        variables: {
          data: {
            dueDate: {
              set: date
            }
          },
          where: {
            id: taskId
          },
        }
      });
      refetch();
      messageApi.success('Updates due date success!');
    } catch (error) {
      console.log(error, 'Update task due date error!');
      messageApi.error('Update due date failed!');
    }
  };

  const handleUpdateTaskName = async (name: string, taskId: string) => {
    try {
      await updateTask({
        variables: {
          data: {
            name: {
              set: name
            }
          },
          where: {
            id: taskId
          },
        }
      });
      refetch();
      messageApi.success('Updates due date success!');
    } catch (error) {
      console.log(error, 'Update task due date error!');
      messageApi.error('Update due date failed!');
    }
  };

  const columns: TableProps<Task>['columns'] = [
    {
      title: 'Task',
      dataIndex: 'name',
      key: 'name',
      render: (_, data) => {
        return (
          <Typography.Paragraph
            editable={{
              onChange: (newName) => handleUpdateTaskName(newName, data?.id),
              maxLength: 50,
            }}
          >
            {data?.name}
          </Typography.Paragraph>
        )
      }
    },
    Table.EXPAND_COLUMN,
    {
      title: '',
      dataIndex: 'message',
      key: 'message',
      align: 'center',
      render: () => (
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
      render: (status, data) => (
        <StatusPopover
          statusName={status?.name}
          statusColor={status?.color}
          content={(
            <Fragment>
              {statusContent === 'change'
                ? (
                  <StatusesContent
                    statusesData={statusesData?.statuses as Status[]}
                    taskId={data?.id}
                    onStatus={(statusId) => handleUpdateTaskStatus(statusId, data?.id)}
                    onEdit={() => setStatusContent('edit')}
                  />
                )
                : (
                  <Form onFinish={console.log}>
                    <StatusFormList
                      initialData={statusesData?.statuses as Status[]}
                    />
                  </Form>
                )
              }
            </Fragment>
          )}
        />
      )
    },
    {
      title: 'Due date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      align: 'center',
      width: 150,
      render: (_, data) => {
        return <DatePicker 
          format={'DD MMM'} 
          variant={'outlined'} 
          onChange={date => handleUpdateTaskDuedate(dayjs(date).toDate(), data?.id)}
        />
      }
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      width: 150,
      align: 'center',
      render: (priority, data) => (
        <StatusPopover
          statusName={priority?.name}
          statusColor={priority?.color}
          content={(
            <Fragment>
              {priorityContent === 'change'
                ? (
                  <StatusesContent
                    statusesData={prioritiesData?.priorities as Priority[]}
                    taskId={data?.id}
                    onStatus={(statusId) => handleUpdateTaskPriority(statusId, data?.id)}
                    onEdit={() => setPriorityContent('edit')}
                  />
                )
                : (
                  <Form onFinish={console.log}>
                    <StatusFormList
                      initialData={prioritiesData?.priorities as Priority[]}
                    />
                  </Form>
                )
              }
            </Fragment>
          )}
        />
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
          expandedRowRender: () => (
            <Table
              dataSource={[]}
              columns={[]}
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

