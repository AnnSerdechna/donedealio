import { FC } from 'react'

import { 
  Priority, 
  Status, 
  useCreateOnePriorityMutation, 
  useDeleteManyPriorityMutation, 
  usePrioritiesQuery, 
  useUpdateOnePriorityMutation
} from '@/graphql/types';
import { StatusFormList } from '../status-edit-form/statuses-form-list';
import { StatusForm } from '../status-edit-form';

export const PriorityEdit: FC<{ onBack: VoidFunction }> = ({ onBack }) => {
  const { data: prioritiesData, refetch } = usePrioritiesQuery();
  const [createPriority, { loading: createPriorityLoading }] = useCreateOnePriorityMutation();
  const [updatePriority, { loading: updatePriorityLoading }] = useUpdateOnePriorityMutation();
  const [deletePriorities, { loading: deletePriorityLoading }] = useDeleteManyPriorityMutation();

  const handleDeletePriorities = async (deletedIds: number[]) => {
    try {
      await deletePriorities({
        variables: {
          where: { id: { in: deletedIds } }
        }
      });

      refetch();
    } catch (error) {
      console.log(error, `Delete priorities error!`);
    }
  };

  const handleCreatePriority = async (name: string, color: string) => {
    try {
      await createPriority({
        variables: {
          data: {
            name,
            color,
          }
        }
      });

      refetch();
    } catch (error) {
      console.log(error, `Create priority error!`);
    }
  };

  const handleUpdatePriority = async (id: number, name: string, color: string) => {
    try {
      await updatePriority({
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
      console.log(error, `Update priority error!`);
    }
  };

  return (
    <StatusForm
      data={prioritiesData?.priorities as Status[]}
      handleCreateStatus={handleCreatePriority}
      handleUpdateStatus={handleUpdatePriority}
      handleDeleteStatuses={handleDeletePriorities}
    >
      <StatusFormList
        statusesData={prioritiesData?.priorities as Priority[]}
        onBack={onBack}
        submitLoading={createPriorityLoading || updatePriorityLoading || deletePriorityLoading}
      />
    </StatusForm>
  )
};
