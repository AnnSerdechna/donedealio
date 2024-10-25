import { FC } from 'react';
import { App, Form } from 'antd';
import { Color } from 'antd/es/color-picker';

import { 
  Status, 
  StatusType, 
  useCreateStatusMutation, 
  useDeleteStatusesMutation, 
  useStatusesQuery,
  useUpdateStatusMutation, 
} from '@/graphql/types';
import { StatusFormList } from './statuses-form-list';
import { useCurrentUser } from '@/hooks/useCurrentUser';

type FormValuesProps = {
  statuses: { id: number | undefined, color: string | Color, name: string }[]
}

type StatusEditProps = {
  statusType: StatusType, 
  onBack: VoidFunction
};

export const StatusEdit: FC<StatusEditProps> = ({ statusType, onBack }) => {
  const { message } = App.useApp();
  const user = useCurrentUser();
  const { data, refetch } = useStatusesQuery({
    variables: {
      where: {
        userId: {equals: user.id},
        type: { equals: statusType }
      }
    }
  });

  const [createStatus, { loading: createStatusLoading }] = useCreateStatusMutation();
  const [updateStatus, { loading: updateStatusLoading }] = useUpdateStatusMutation();
  const [deleteStatuses, { loading: deleteStatusLoading }] = useDeleteStatusesMutation();

  const handleDeleteStatuses = async (deletedIds: number[]) => {
    try {
      await deleteStatuses({
        variables: {
          where: { id: { in: deletedIds } }
        }
      });
      refetch();
    } catch (error) {
      console.log(error, `Delete statuses error!`);
    }
  };

  const handleCreateStatus = async (name: string, color: string) => {
    try {
      await createStatus({
        variables: {
          data: {
            user: { connect: { id: user.id } },
            name: name ?? '',
            color,
            type: statusType
          }
        }
      });
      refetch();
    } catch (error) {
      console.log(error, `Create status error!`);
    }
  };

  const handleUpdateStatus = async (id: number, name: string, color: string) => {
    try {
      await updateStatus({
        variables: {
          data: {
            name: { set: name },
            color: { set: color }
          },
          where: {
            id
          },
        }
      });
      refetch();
    } catch (error) {
      console.log(error, `Update status error!`);
    }
  };


  const onSubmit = async (values: FormValuesProps) => {
    try {
      const ids = values?.statuses?.filter((item) => !!item?.id)?.map((item) => item?.id);
      const deletedIds = data?.statuses?.filter(item => !ids?.includes(item?.id))?.map((item) => item?.id);

      if (!!deletedIds?.length) {
        handleDeleteStatuses(deletedIds);
      };

      values?.statuses?.forEach(async (item) => {
        const existedStatus = data?.statuses?.find(status => status?.id === item?.id);
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
      <StatusFormList 
        statusesData={data?.statuses as Status[]}
        onBack={onBack}
        submitLoading={createStatusLoading || updateStatusLoading || deleteStatusLoading}
      />
    </Form>
  )
}