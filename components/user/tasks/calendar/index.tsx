'use client';

import React, { FC, Fragment, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { Calendar as AntCalendar, Form } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/en'; 

import { Task, useTaskQuery, useTasksQuery } from '@/graphql/types';
import { CreateTaskForm, UpdateTaskForm, ControlPanel, TasksList } from '@/components/user';
import { Modal } from '@/components/ui';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(localeData);

export const CalendarView: FC = () => {
  const createTaskForm = Form.useForm();
  const updateTaskForm = Form.useForm();
  const { workspaceId } = useParams();
  const [selectedTaskId, setTaskId] = useState<string>('');
  const [selectedDate, setDate] = useState<Dayjs | null>(null);
  const { data: tasksData, refetch } = useTasksQuery({
    variables: {
      workspaceId: workspaceId as string
    }
  });

  const { data: taskData } = useTaskQuery({
    variables: {
      where: {
        id: selectedTaskId
      }
    }
  })


  const headerButtonRef = useRef(false);

  const onSelectTask = (item: Task, date: Dayjs) => {
    setTaskId(item?.id);

    updateTaskForm[0].setFieldsValue({
      task: item?.name,
      status: item?.status,
      priority: item?.priority,
      notes: item?.note,
      dueDate: date
    });
  };

  const onSelectCell = (date: Dayjs) => {
    if (headerButtonRef.current) {
      headerButtonRef.current = false; 
      return; 
    }
  
    setDate(date);
    createTaskForm[0].setFieldValue('dueDate', date);
  };

  const handleCloseCreateTask = () => setDate(null);

  const handleCloseUpdateTask = () => setTaskId('');

  return (
    <Fragment>
      <AntCalendar
        mode={'month'}
        cellRender={(value) => (
          <TasksList 
            value={value} 
            data={tasksData?.tasks as Task[]} 
            onSelectCell={onSelectCell} 
            onSelectTask={onSelectTask}
          />
        )}
        onSelect={onSelectCell}
        headerRender={({ value, onChange }) => (
          <ControlPanel
            value={value}
            onChange={onChange}
            setButtonRef={() => headerButtonRef.current = true}
          />
        )}
      />

      <Modal
        open={!!selectedDate}
        onCancel={handleCloseCreateTask}
      >
        <CreateTaskForm
          taskId={selectedTaskId}
          form={createTaskForm[0]}
          files={taskData?.task?.files ?? []}
          onCancel={handleCloseCreateTask}
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
          files={taskData?.task?.files ?? []}
          onCancel={handleCloseUpdateTask}
          refetchTasks={refetch}
        />
      </Modal>
    </Fragment>
  )
}