import { DatePicker, DatePickerProps, Flex, Tooltip } from 'antd';
import { FC, useMemo } from 'react';
import dayjs from 'dayjs';
import { InfoCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

import styles from './index.module.scss';

type DueDateProps = DatePickerProps & { dueDate: string, statusName: string }

export const DueDateField: FC<DueDateProps> = ({ dueDate, statusName, ...props }) => {
  const today = dayjs().startOf('day');
  const due = dayjs(dueDate).startOf('day');
  const diffInDays = due.diff(today, 'day');
  const percent = Math.round((diffInDays / 8) * 100);

  const renderIcon = useMemo(() => {
    switch (true) {
      case statusName?.toLowerCase() === 'done':
        return (
          <CheckCircleTwoTone 
            twoToneColor="#36ba98" 
            style={{ fontSize: 16 }} 
          />
        );
      case diffInDays <= 0:
        return (
          <Tooltip 
            title={`${Math.abs(diffInDays)} days have passed since the due date!`}
          >
            <InfoCircleTwoTone 
              twoToneColor="#e76f51" 
              style={{ fontSize: 16 }} 
            />
          </Tooltip>
        );
      case diffInDays > 0 && diffInDays < 8 && statusName?.toLowerCase() !== 'done':
        return (
          <Tooltip title={`${diffInDays} days left`}>
            <div
              className={styles.pieIcon}
              style={{
                background: `conic-gradient(#758694 ${percent}% ${percent}%, #fff ${percent}% 100%)`,
              }}
            />
          </Tooltip>
        );
      default:
        return (
          <Tooltip title={`${diffInDays} days left`}>
            <div className={styles.circleIcon} />
          </Tooltip>
        );
    }
  }, [diffInDays, percent, statusName]);

  return (
    <Flex align={'center'} gap={3}>
      {!!dueDate && renderIcon}
      <DatePicker
        format={'DD MMM'}
        showNow={false}
        variant={'borderless'}
        {...props}
      />
    </Flex>
  )
}


