import { StatusType, useStatusesQuery } from '@/graphql/types';
import { useCurrentUser } from './useCurrentUser';

export const useStatusData= () => {
  const user = useCurrentUser();
  const { data: statusesData } = useStatusesQuery({
    variables: {
      where: {
        userId: {
          equals: user.id
        },
        type: { equals: StatusType.Status }
      }
    }
  });
  const { data: prioritiesData } = useStatusesQuery({
    variables: {
      where: {
        userId: {
          equals: user.id
        },
        type: { equals: StatusType.Priority }
      }
    }
  });

  return { statusesData, prioritiesData };
}