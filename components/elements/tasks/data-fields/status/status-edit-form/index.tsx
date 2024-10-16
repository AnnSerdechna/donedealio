import { App, Form } from 'antd';
import { Color } from 'antd/es/color-picker';
import { FC, ReactNode } from 'react';

import { Priority, Status } from '@/graphql/types';

type StatusFormProps = {
  children: ReactNode
  data: Status[] | Priority[]
  handleDeleteStatuses: (ids: number[]) => void
  handleCreateStatus: (name: string, color: string) => void
  handleUpdateStatus: (id: number, name: string, color: string) => void
}

type FormValuesProps = {
  statuses: { id: number | undefined, color: string | Color, name: string }[]
}

export const StatusForm: FC<StatusFormProps> = ({
  children,
  data,
  handleDeleteStatuses,
  handleCreateStatus,
  handleUpdateStatus,
}) => {
  const { message } = App.useApp();

  const onSubmit = async (values: FormValuesProps) => {
    try {
      const ids = values?.statuses?.filter((item) => !!item?.id)?.map((item) => item?.id);
      const deletedIds = data?.filter(item => !ids?.includes(item?.id))?.map((item) => item?.id);

      if (!!deletedIds?.length) {
        handleDeleteStatuses(deletedIds);
      };

      values?.statuses?.forEach(async (item) => {
        const existedStatus = data?.find(status => status?.id === item?.id);
        const color = typeof item?.color === 'string' ? item?.color : item?.color?.toHexString();

        if (!item?.id) {
          handleCreateStatus(item?.name, color);
        };

        if (!!item?.id && (existedStatus?.name !== item?.name || existedStatus?.color !== item?.color)) {
          handleUpdateStatus(item?.id, item?.name, color)
        };
      });

      message.success('Status was updated successfully!');
    } catch (error) {
      console.log(error, `Submit status edit error!`);
      message.error('Something went wrong!');
    }
  };

  return (
    <Form onFinish={onSubmit}>
      {children}
    </Form>
  )
}
