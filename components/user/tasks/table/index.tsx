'use client';

import { FC, useState } from "react";
import { useParams } from 'next/navigation';

import { Badge, Button, Flex, Table, App } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import {
  MessageOutlined,
  DeleteTwoTone,
  PlusCircleOutlined,
} from '@ant-design/icons';
import {
  Status,
  Task,
  useDeleteManyTaskMutation,
  usePrioritiesQuery,
  useStatusesQuery,
  useTasksQuery,
  useUpdateOneTaskMutation,
} from '@/graphql/types';

import { DueDateField, StatusField, EditableText, OwnerField, AddTaskForm } from '@/components/user';
import { getFormattedDate } from '@/functions/getFormattedDate';
import { FilesUpload } from '../data-fields/files';

type UpdatedDataType = { [key: string]: { set: string | Date } } | { [key: string]: { connect: { id: number } } };

export const TableView: FC = () => {
  const { message } = App.useApp();
  const { workspaceId } = useParams();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { data: statusesData } = useStatusesQuery();
  const { data: prioritiesData } = usePrioritiesQuery();
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

  const handleEditContent = (newValue: string, value: string, updatedField: string, taskId: string) => {
    const newData = {
      [updatedField]: {
        set: newValue
      }
    };
    if (value !== newValue) {
      handleUpdateTask(newData, taskId, updatedField)
    };
  }

  const columns: TableProps<Task>['columns'] = [
    {
      title: 'Task',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (name, data) => {
        return (
          <EditableText
            value={name}
            tooltip={`Edit task`}
            onChange={newValue => handleEditContent(newValue, name, 'name', data?.id)}
          />
        )
      }
    },
    {
      title: '',
      dataIndex: 'message',
      key: 'message',
      align: 'center',
      fixed: 'left',
      width: 60,
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
      width: 100,
      render: () => <OwnerField />
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
      render: (dueDate, data) => (
        <DueDateField
          value={!!dueDate ? dayjs(dueDate) : null}
          dueDate={dueDate}
          statusName={data?.status?.name as string}
          variant={'borderless'}
          style={{ width: '90%' }}
          onChange={date => {
            const newData = {
              dueDate: {
                set: getFormattedDate(date)
              }
            };
            handleUpdateTask(newData, data?.id, 'Due date')
          }}
        />
      )
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
      width: 250,
      render: (note, data) => {
        return (
          <EditableText
            value={note}
            icon={<PlusCircleOutlined />}
            tooltip={`${!note ? 'Add' : 'Edit'} note`}
            onChange={newValue => handleEditContent(newValue, note, 'note', data?.id)}
          />
        )
      }
    },
    {
      title: 'Files',
      dataIndex: 'files',
      key: 'files',
      align: 'center',
      width: 200,
      render: (_, data) => <FilesUpload files={data?.files} taskId={data?.id} refetch={refetch} />
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
        scroll={{ x: 1250 }}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        rowKey={(record) => record.id}
        footer={() => <AddTaskForm workspaceId={workspaceId as string} refetchTasks={refetch} />}
      />
    </Flex>
  );
}

