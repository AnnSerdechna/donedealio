'use client';

import { FC, Fragment, useState } from 'react';

import { StatusPopover } from './status-popover';
import { StatusChange, StatusChangeProps } from './status-change';
import { StatusEdit } from './status-edit';
import { PriorityEdit } from './priority-edit';
import { Priority, Status } from '@/graphql/types';
import { StatusBtnProps } from './status-btn';

type StatusFieldProps = Omit<StatusChangeProps, 'onEdit'> & Pick<StatusBtnProps, 'size'> & { status: Status | Priority };

export const StatusField: FC<StatusFieldProps> = ({
  data, 
  taskId,
  form,
  status, 
  size,
  updatedField,
  refetchTask, 
}) => {
  const [statusContent, setStatusContent] = useState<'change' | 'edit'>('change');

  const handleSetContentAsChange = () => setStatusContent('change');
  const handleSetContentAsEdit = () => setStatusContent('edit');

  return (
    <StatusPopover
      status={status}
      size={size}
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