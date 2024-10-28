import { FC, Fragment } from 'react'
import { Flex, Table } from 'antd';
import dayjs from 'dayjs';

import { StatusBar } from '@/components/user/status-bar';
import { Text } from '@/components/ui';
import { Task, useAggregateTaskByDateQuery } from '@/graphql/types';


type TableSummaryProps = {
  workspaceId: string
  tasksData: Task[]
};

export const TableSummary: FC<TableSummaryProps> = ({ workspaceId, tasksData  }) => {
  const { data: agregatedTaskByDate } = useAggregateTaskByDateQuery({
    variables: {
      where: {
        workspaceId: {
          equals: workspaceId
        }
      }
    }
  });

  const mintDate = dayjs(agregatedTaskByDate?.aggregateTask?._min?.dueDate).format('DD MMM');
  const maxDate = dayjs(agregatedTaskByDate?.aggregateTask?._max?.dueDate).format('DD MMM');

  return (
    <Fragment>
      <Table.Summary.Row>
        <Table.Summary.Cell index={0} />
        <Table.Summary.Cell index={1} />
     

        <Table.Summary.Cell index={3}>
          <StatusBar tasks={tasksData} />
        </Table.Summary.Cell>

        <Table.Summary.Cell index={3}>
          {!!mintDate && !!maxDate && (
            <Flex gap={4} justify={'center'} >
              <Text>{mintDate}</Text>
              <Text>{'-'}</Text>
              <Text>{maxDate}</Text>
            </Flex>
          )}
        </Table.Summary.Cell>

        <Table.Summary.Cell index={4}>
          <StatusBar
            tasks={tasksData}
            statusType={'priority'}
          />
        </Table.Summary.Cell>
      </Table.Summary.Row>

    </Fragment>
  )
}