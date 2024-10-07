'use client';

import { FC, Fragment, useState } from 'react';

import { StatusPopover } from './status-popover';
import { StatusChange } from './status-change';
import { StatusEdit } from './status-edit';
import { Priority, Status } from '@/graphql/types';
import { PriorityEdit } from './priority-edit';
import { FormInstance } from 'antd';

type StatusFieldProps = {
  data: Status[] | Priority[]
  taskId?: string
  form?: FormInstance
  status: Status | Priority
  updatedField: 'status' | 'priority'
  refetchTask?: VoidFunction
};

export const StatusField: FC<StatusFieldProps> = ({
  data, 
  taskId,
  form,
  status, 
  updatedField,
  refetchTask, 
}) => {
  const [statusContent, setStatusContent] = useState<'change' | 'edit'>('change')

  const handleSetContentAsChange = () => setStatusContent('change')
  const handleSetContentAsEdit = () => setStatusContent('edit')

  return (
    <StatusPopover
      status={status}
      onClick={handleSetContentAsChange}
      content={(
        <Fragment>
          {statusContent === 'change'
            ? (
              <StatusChange
                form={form}
                taskId={taskId}
                data={data}
                refetchTask={refetchTask}
                onEdit={handleSetContentAsEdit}
                updatedField={updatedField}
              />
            )
            : (
              updatedField === 'status'
                ? <StatusEdit onBack={handleSetContentAsChange} />
                : <PriorityEdit onBack={handleSetContentAsChange} />
            )
          }
        </Fragment>
      )}
    />
  )
}