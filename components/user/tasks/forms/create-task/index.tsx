'use client';

import { App, UploadFile } from 'antd';
import { FC, useState } from 'react';
import { useParams } from 'next/navigation';

import { useCreateFileMutation, useCreateTaskMutation } from '@/graphql/types';
import { getFormattedDate } from '@/functions/getFormattedDate';
import { FormData, TaskForm, TaskFormProps } from '../task-form';

export const CreateTaskForm: FC<Omit<TaskFormProps, 'action' | 'submitLoading'>> = ({ 
  form, 
  taskId, 
  files, 
  refetchTasks, 
  onCancel,
   ...props 
  }) => {
  const { message } = App.useApp();
  const { workspaceId } = useParams();
  const [createTask, { loading }] = useCreateTaskMutation();
  const [createFile] = useCreateFileMutation();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCloseForm = () => {
    form.resetFields();
    onCancel();
  };

  const hanldeCreateTask = async (values: FormData) => {
    let data = {
      workspace: { connect: { id: workspaceId as string } },
      name: values.task,
      note: values?.notes,
      dueDate: getFormattedDate(values?.dueDate),
    };

    if (!!values?.status?.id) {
      data = Object.assign(data, { status: { connect: { id: values?.status?.id } } })
    };

    if (!!values?.priority?.id) {
      data = Object.assign(data, { priority: { connect: { id: values?.priority?.id } } })
    };

    try {
      await createTask({variables: { data }})
        .then((res) => {
          fileList?.forEach(async (item) => {
            await createFile({
              variables: {
                data: {
                  url: item?.url ?? '',
                  fileId: item?.uid,
                  name: item?.name,
                  task: {
                    connect: {
                      id: res?.data?.createOneTask?.id ?? ''
                    }
                  }
                }
              }
            })
          })
        });
      refetchTasks();
      message.success('Task was created successfully!');
    } catch {
      message.error('Something went wrong!');
    } finally {
      setFileList([])
      handleCloseForm();
    }
  };
  return (
    <TaskForm
      form={form}
      taskId={taskId}
      files={files}
      action={'create'}
      submitLoading={loading}
      onCancel={onCancel}
      fileList={fileList}
      setFileList={setFileList}
      refetchTasks={refetchTasks}
      onFinish={hanldeCreateTask}
      {...props}
     />
  )
}