import { FC } from 'react'

import { 
  Status, 
  useCreateOneStatusMutation, 
  useDeleteManyStatusMutation, 
  useStatusesQuery, 
  useUpdateOneStatusMutation 
} from '@/graphql/types';
import { StatusFormList } from '../status-edit-form/statuses-form-list';
import { StatusForm } from '../status-edit-form';

export const StatusEdit: FC<{ onBack: VoidFunction }> = ({ onBack }) => {
  const { data: statusesData, refetch } = useStatusesQuery();
  const [createStatus, { loading: createStatusLoading }] = useCreateOneStatusMutation();
  const [updateStatus, { loading: updateStatusLoading }] = useUpdateOneStatusMutation();
  const [deleteStatuses, { loading: deleteStatusLoading }] = useDeleteManyStatusMutation();

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
            name,
            color,
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

  return (
    <StatusForm 
      data={statusesData?.statuses as Status[]}
      handleCreateStatus={handleCreateStatus}
      handleUpdateStatus={handleUpdateStatus}
      handleDeleteStatuses={handleDeleteStatuses}
    >
      <StatusFormList 
        statusesData={statusesData?.statuses as Status[]}
        onBack={onBack}
        submitLoading={createStatusLoading || updateStatusLoading || deleteStatusLoading}
      />
    </StatusForm>
  )
}