'use client'
import { FC, Fragment, useState } from "react";
import { useParams } from 'next/navigation';

import { Avatar, Badge, DatePicker, Button, Flex, Form, Input, message, Popover, Space, Table, Tag, Typography, Upload } from "antd"
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { 
  MessageOutlined, 
  UserAddOutlined, 
  SearchOutlined, 
  DeleteTwoTone, 
  FileAddOutlined, 
  PlusCircleOutlined,
  } from '@ant-design/icons'
import { 
  Status, 
  StatusType, 
  Task, 
  useDeleteManyTaskMutation, 
  useStatusesQuery, 
  useTasksQuery, 
  useUpdateOneTaskMutation, 
  useWorkspaceQuery 
} from '@/graphql/types';

import { AddTaskForm } from '@/components/elements/tasks/add-task-form';
import { StatusFormList } from './status-form-list';
import { StatusPopover } from './status-popover';
import { StatusesContent } from './statuses-content';

const { Text } = Typography;

type UpdatedDataType = { [key: string]: { set: string | Date } } | { [key: string]: { connect: { id: number } } };

export const TasksTable: FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { workspaceId } = useParams();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [statusContent, setStatusContent] = useState<'change' | 'edit'>('change')

  const { data: statusesData, refetch: reftchStatuses } = useStatusesQuery({variables: {where: {type: {equals: StatusType.Status}}}});
  const { data: prioritiesData } = useStatusesQuery({variables: {where: {type: {equals: StatusType.Priority}}}});
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

  const handleUpdateTask = async (data: UpdatedDataType, taskId: string, updatedField: string) => {
    try {
      await updateTask({
        variables: {
          data,
          where: {
            id: taskId
          },
        }
      });
      refetch();
      messageApi.success(`${updatedField} was updated successfully!`);
    } catch (error) {
      console.log(error, `Updated ${updatedField} error!`);
      messageApi.error(`Updated ${updatedField} failed!`);
    }
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
    } catch (error) {
      console.log(error, 'Delete tasks error!');
      messageApi.error('Delete selected tasks failed!')
    }
  };

  const renderStatus = (status: Status, data: Task, statuses: Status[], statusType: StatusType) => {
    return (
      <StatusPopover
        statusName={status?.name}
        statusColor={status?.color}
        content={(
          <Fragment>
            {statusContent === 'change'
              ? (
                <StatusesContent
                  statusesData={statuses}
                  taskId={data?.id}
                  onStatus={(statusId) => {
                    const newData = {
                      status: {
                        connect: {
                          id: statusId
                        }
                      }
                    };
                    handleUpdateTask(newData, data?.id, 'Status')
                  }}
                  onEdit={() => setStatusContent('edit')}
                />
              )
              : (
                <Form onFinish={console.log}>
                  <StatusFormList initialData={statuses} />
                </Form>
              )
            }
          </Fragment>
        )}
      />
    )
  }

  const columns: TableProps<Task>['columns'] = [
    {
      title: 'Task',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
   
      render: (name, data) => {
        return (
          <Typography.Paragraph
            editable={{
              onChange: newValue => {
                const newData = {
                  name: {
                    set: newValue
                  }
                };
                name !== newValue && handleUpdateTask(newData, data?.id, 'Name')
              },
              maxLength: 50,
            }}
          >
            {name}
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
      fixed: 'left',
      width: '5%',
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
      render: (item, data) => renderStatus(item, data, prioritiesData?.statuses as Status[], StatusType.Status)
    },
    {
      title: 'Due date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      align: 'center',
      width: 150,
      render: (dueDate, data) => {
        return (
          <Flex>
            <DatePicker
              value={!!dueDate ? dayjs(dueDate) : null}
              format={'DD MMM'}
              showNow={false}
              variant={'borderless'}
              onChange={date => {
                const currentDate = new Date();
                const newDate = dayjs(date)
                  .set('hour', currentDate.getHours())
                  .set('minute', currentDate.getMinutes())
                  .set('second', currentDate.getSeconds());

                const newData = {
                  dueDate: {
                    set: newDate.toDate()
                  }
                };
                handleUpdateTask(newData, data?.id, 'Due date')
              }}
            />
          </Flex>
        )
      }
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      width: 150,
      align: 'center',
      render: (item, data) => renderStatus(item, data, prioritiesData?.statuses as Status[], StatusType.Priority)
    },
    {
      title: 'Notes',
      dataIndex: 'note',
      key: 'note',
      align: 'center',
      width: '15%',
      render: (note, data) => {
        return (
          <Typography.Paragraph
            editable={{
              onChange: newValue => {
                const newData = {
                  note: {
                    set: newValue
                  }
                };
                note !== newValue && handleUpdateTask(newData, data?.id, 'Note');
              },
              maxLength: 50,
              icon: <PlusCircleOutlined />,
              tooltip: `${!!note ? 'Add' : 'Edit'} note`
            }}
          >
            {note}
          </Typography.Paragraph>
        )
      }
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

  return (
    <Flex vertical gap={4}>
      {contextHolder}
      <Flex>
        {!!selectedRowKeys.length && (
          <Button
            type={'text'}
            icon={<DeleteTwoTone />}
            loading={deleteTasksLoading}
            onClick={handleRemoveSelectedTasks}
          >
            Delete
          </Button>
        )}
      </Flex>
      <Table
        dataSource={tasksData?.tasks as Task[]}
        columns={columns}
        loading={dataLoading}
        size={'small'}
        pagination={false}
        scroll={{ x: 1400 }}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        rowKey={(record) => record.id}
        footer={() => <AddTaskForm workspaceId={data?.workspace?.id as string} refetchTasks={refetch} />}
      />
    </Flex>
  );
}

