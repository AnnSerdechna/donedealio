"use client";

import React, { FC, Fragment, useState } from 'react';
import { Calendar, Flex, Form, Button } from 'antd';
import type { CalendarProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useParams } from 'next/navigation';

import { Task, useTasksQuery } from '@/graphql/types';
import { CreateTaskForm, UpdateTaskForm } from '@/components/elements';
import { Modal } from '@/components/ui';
import styles from './index.module.scss';

export const CalendarView: FC = () => {
  const createTaskForm = Form.useForm();
  const updateTaskForm = Form.useForm();
  const { workspaceId } = useParams();
  
  const [selectedTaskId, setTaskId] = useState<string>('')
  const [selectedDate, setDate] = useState<Dayjs | null>(null)

  const { data: tasksData, refetch } = useTasksQuery({
    variables: {
      workspaceId: workspaceId as string
    }
  });

  const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const onSelectTask = (item: Task, date: Dayjs) => {
    setTaskId(item?.id)

    updateTaskForm[0].setFieldsValue({
      task: item?.name,
      status: item?.status,
      priority: item?.priority,
      notes: item?.note,
      dueDate: date
    })

  };

  const dateCellRender = (value: Dayjs) => {
    const formattedDate = value.format('YYYY-MM-DD')
    const data = tasksData?.tasks?.filter(item => dayjs(item?.dueDate).format('YYYY-MM-DD') === formattedDate)

    return (
      <Flex vertical justify={'space-between'} style={{ height: '100%' }}>
        <ul className={styles.tasksList}>
          {data?.map((item) => (
            <li key={item?.id}>
              <button
                style={{ background: item?.status?.color }}
                onClick={(event) => {
                  event.stopPropagation();
                  onSelectTask(item as Task, value)
                }}
              >
                {item?.name}
              </button>
            </li>
          ))}
        </ul>

        {!!data?.length && (
          <Flex justify='end'>
            <Button
              type={'text'}
              size={'small'}
              onClick={() => onSelectCell(value)}
            >
              + Add
            </Button>
          </Flex>
        )}
      </Flex>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const handleCloseCreateTask = () => setDate(null);
  const handleCloseUpdateTask = () => setTaskId('');

  const onSelectCell = (date: Dayjs) => {
    setDate(date);
    createTaskForm[0].setFieldValue('dueDate', date);
  };

  return (
    <Fragment>
      <Calendar
        onPanelChange={onPanelChange}
        cellRender={cellRender}
        onSelect={onSelectCell}
      />
      <Modal
        open={!!selectedDate}
        onCancel={handleCloseCreateTask}
      >
        <CreateTaskForm
          form={createTaskForm[0]}
          onCloseForm={handleCloseCreateTask}
          refetchTasks={refetch}
        />
      </Modal>

      <Modal
        open={!!selectedTaskId}
        onCancel={() => setTaskId('')}
      >
        <UpdateTaskForm
          taskId={selectedTaskId}
          form={updateTaskForm[0]}
          onCloseForm={handleCloseUpdateTask}
          refetchTasks={refetch}
        />
      </Modal>
    </Fragment>
  )
}