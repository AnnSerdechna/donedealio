import { Button, Flex, Select } from 'antd';
import dayjs from 'dayjs';
import { FC } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { Text } from '@/components/ui';

type ControlPanelProps = {
  value: dayjs.Dayjs
  onChange: (date: dayjs.Dayjs) => void
  setButtonRef: VoidFunction
};

export const ControlPanel: FC<ControlPanelProps> = ({ value, onChange, setButtonRef }) => {
  const goToNextWeek = () => onChange(value.add(1, 'month'));
  const goToPreviousWeek = () => onChange(value.subtract(1, 'month'));
  const goToToday = () => onChange(dayjs());

  const start = 0;
  const end = 12;
  const monthOptions = [];

  let current = value.clone();
  const localeData = value.localeData();
  const months = [];
  for (let i = 0; i < 12; i++) {
    current = current.month(i);
    months.push(localeData.monthsShort(current));
  }

  for (let i = start; i < end; i++) {
    monthOptions.push(
      <Select.Option key={i} value={i}>
        {months[i]}
      </Select.Option>,
    );
  }

  const year = value.year();
  const month = value.month();
  const options = [];
  for (let i = year - 10; i < year + 10; i += 1) {
    options.push(
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>,
    );
  };

  return (
    <Flex align={'center'} justify={'space-between'}>
      <Flex align={'center'} gap={16} style={{ padding: '16px 0 24px' }}>
        <Button
          onClick={() => {
            setButtonRef();
            goToToday();
          }}
        >
          Today
        </Button>

        <Flex>
          <Button
            type={'text'}
            onClick={() => {
              setButtonRef();
              goToPreviousWeek();
            }}
          >
            <LeftOutlined />
          </Button>
          <Button
            type={'text'}
            onClick={() => {
              setButtonRef();
              goToNextWeek();
            }}
          >
            <RightOutlined />
          </Button>
        </Flex>

        <Text style={{ fontSize: 18 }}>{dayjs(value).format('MMMM, YYYY')}</Text>
      </Flex>

      <Flex align={'center'} gap={8}>
        <Select
          popupMatchSelectWidth={false}
          style={{ width: 90 }}
          value={year}
          onChange={(newYear) => {
            setButtonRef();
            const now = value.clone().year(newYear);
            onChange(now);
          }}
        >
          {options}
        </Select>

        <Select
          popupMatchSelectWidth={false}
          value={month}
          style={{ width: 90 }}
          onChange={(newMonth) => {
            setButtonRef();
            const now = value.clone().month(newMonth);
            onChange(now);
          }}
        >
          {monthOptions}
        </Select>
      </Flex>
    </Flex>
  )
}


