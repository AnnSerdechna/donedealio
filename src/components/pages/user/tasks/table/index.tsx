'use client';

import { FC, useState } from "react";
import { useParams } from 'next/navigation';

import { Avatar, Badge, DatePicker, Button, Flex, Input, Popover, Space, Table, Tag, Typography, Upload, App} from 'antd';
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
  Task,
  useDeleteManyTaskMutation,
  usePrioritiesQuery,
  useStatusesQuery,
  useTasksQuery,
  useUpdateOneTaskMutation,
  useWorkspaceQuery
} from '@/graphql/types';

import { AddTaskForm } from '@/components/elements/tasks/add-task-form';
import { StatusField } from '@/components/elements';


const { Text } = Typography;

type UpdatedDataType = { [key: string]: { set: string | Date } } | { [key: string]: { connect: { id: number } } };

export const TableView: FC = () => {
  const { message } = App.useApp();
  const { workspaceId } = useParams();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { data: statusesData } = useStatusesQuery();
  const { data: prioritiesData } = usePrioritiesQuery();
  const { data } = useWorkspaceQuery({
    variables: {
      where: {
        id: workspaceId as string
      }
    }
  });
  const { data: tasksData, refetch, loading: dataLoading } = useTasksQuery({
    variables: {
      workspaceId: workspaceId as string
    }
  });
  const [deleteTasks, { loading: deleteTasksLoading }] = useDeleteManyTaskMutation();
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
      message.success(`${updatedField} was updated successfully!`);
    } catch (error) {
      console.log(error, `Updated ${updatedField} error!`);
      message.error(`Updated ${updatedField} failed!`);
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
      message.error('Delete selected tasks failed!')
    }
  };

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

                if (name !== newValue) {
                  handleUpdateTask(newData, data?.id, 'Name')
                }
              },
              maxLength: 50,
            }}
          >
            {name}
          </Typography.Paragraph>
        )
      }
    },
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
      render: (_, data) => (
        <StatusField 
          data={statusesData?.statuses as Status[]}
          taskId={data?.id}
          status={data?.status as Status}
          updatedField={'status'}
          refetchTask={refetch}
        />
      )
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
      render: (_, data) => (
        <StatusField
          data={prioritiesData?.priorities as Status[]}
          taskId={data?.id}
          status={data?.priority as Status}
          updatedField={'priority'}
          refetchTask={refetch}
        />
      )
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

                if (note !== newValue) {
                  handleUpdateTask(newData, data?.id, 'Note');
                }
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

