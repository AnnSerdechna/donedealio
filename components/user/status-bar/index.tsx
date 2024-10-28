import { Tooltip } from 'antd';
import { FC, Fragment } from 'react';
import _ from 'lodash';

import { Task } from '@/graphql/types';
import styles from './index.module.scss';

type BarStatusesProps = {
  name: string,
  color?: string,
  count: number
};

type StatusBarProps = {
  tasks: Task[], 
  statusType?: 'status' | 'priority'
};

export const StatusBar: FC<StatusBarProps> = ({ tasks, statusType = 'status' }) => {

  const statusData: BarStatusesProps[] = _(tasks)
    .groupBy(task => statusType === 'priority' 
      ? task?.priority?.name  
      : task?.status?.name
    )
    .map((tasks, statusName) => {
      const color = statusType === 'priority' 
        ? tasks[0]?.priority?.color 
        : tasks[0]?.status?.color;

      return ({
        name: statusName,
        count: tasks.length,
        color
      })
    })
    .value(); 

  return (
    <Fragment>
      {!!statusData?.length && (
        <div className={styles.statusBar}>
          {statusData.map((status: any) => (
            status.name !== 'undefined'
              ? (
                <Tooltip key={status.name} title={`${status.name ?? ''}: ${status.count}`}>
                  <div
                    style={{
                      flexGrow: status.count,
                      backgroundColor: status.color,
                    }}
                  />
                </Tooltip>
              )
              : null
          ))}
        </div>
      )}
    </Fragment>
  );
};
