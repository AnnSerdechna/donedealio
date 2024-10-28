import { Button, Flex } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { FC } from 'react';

import { Task } from '@/graphql/types';

import styles from './index.module.scss';

type TasksListProps = {
  value: Dayjs
  data: Task[]
  onSelectCell: (value: Dayjs) => void
  onSelectTask: (item: Task, value: Dayjs) => void
};

export const TasksList: FC<TasksListProps> = ({ value, data, onSelectCell, onSelectTask }) => {
  const formattedDate = value.format('YYYY-MM-DD')
  const tasksData = data?.filter(item => dayjs(item?.dueDate).format('YYYY-MM-DD') === formattedDate)

  return (
    <Flex vertical justify={'space-between'} gap={8} className={styles.listWrap}>
      <ul className={styles.tasksList}>
        {tasksData?.map((item) => (
          <li key={item?.id} className={styles.taskItem}>
            <button
              style={{ background: item?.status?.color }}
              onClick={(event) => {
                event.stopPropagation();
                onSelectTask(item as Task, value)
              }}
            >
              {item?.name}
            </button>
          </li>
        ))}
      </ul>

      {!!tasksData?.length && (
        <Flex justify='end'>
          <Button
            type={'text'}
            size={'small'}
            onClick={() => onSelectCell(value)}
          >
            + Add
          </Button>
        </Flex>
      )}
    </Flex>
  )
}