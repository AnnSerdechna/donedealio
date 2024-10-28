'use client';

import { FC, Fragment, useState } from 'react';

import { 
  StatusPopover, 
  StatusEdit, 
  StatusBtnProps, 
  StatusChange, 
  StatusChangeProps 
} from '@/components/user/tasks';
import { Status, StatusType } from '@/graphql/types';

type StatusFieldProps = Omit<StatusChangeProps, 'onEdit'> & Pick<StatusBtnProps, 'size'> & { 
  status: Status 
};

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
                updatedField={updatedField}
                data={data}
                refetchTask={refetchTask}
                onEdit={handleSetContentAsEdit}
              />
            )
            : (
              <StatusEdit
                statusType={updatedField === 'status' ? StatusType.Status : StatusType.Priority}
                onBack={handleSetContentAsChange}
              />
            )
          }
        </Fragment>
      )}
    />
  )
}