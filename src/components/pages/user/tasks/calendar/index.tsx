"use client";

import React, { FC, Fragment, useState } from 'react';
import { Badge, Button, Calendar, DatePicker, Flex, Form, Input, Modal, Popover, Radio, Upload } from 'antd';
import type { BadgeProps, CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { FormItem } from '@/components/ui';
import { FileAddOutlined } from '@ant-design/icons'
import { Status, StatusType, useStatusesQuery } from '@/graphql/types';

export const CalendarView: FC = () => {
  const [form] = Form.useForm();

  const { data: statusesData, refetch: reftchStatuses } = useStatusesQuery({ variables: { where: { type: { equals: StatusType.Status } } } });
  const { data: prioritiesData } = useStatusesQuery({ variables: { where: { type: { equals: StatusType.Priority } } } });
  const [openedTaskDate, setOpenTaskDate] = useState<Dayjs | null>(null)

  const statusValue= Form.useWatch('status', form);
  const priorityValue = Form.useWatch('priority', form);

  const getListData = (value: Dayjs) => {
    let listData: { type: string; content: string }[] = []; // Specify the type of listData
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event......' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const statusItem = (data: Status[], fieldName: string, formItemValue: { name: string, color: string }) => {
    return (
      <Popover
        placement={'bottom'}
        trigger={'click'}
        content={(
          <Radio.Group
            name={fieldName}
            optionType="button"
            buttonStyle="solid"
            onChange={event => {
              form.setFieldValue(fieldName, event.target.value)
            }}
          >
            <Flex vertical gap={4}>
              {data?.map(item => (
                <Radio.Button
                  value={item}
                  style={{
                    width: '100%',
                    background: item?.color,
                    borderRadius: 4,
                  }}
                >
                  {item?.name}
                </Radio.Button>
              ))}
            </Flex>
          </Radio.Group>
        )}
      >
        <Radio.Button
          value=""
          style={{
            width: '100%',
            background: formItemValue?.color,
          }}
        >
          {formItemValue?.name}
        </Radio.Button>
      </Popover>
    );
  };

  const handleClosetaskForm = () => {
    form.resetFields();
    setOpenTaskDate(null);
  }

  const hanldeCreateTsk = (values: any) => {
    try {

    } catch(error) {
      console.log(error, 'Create task error')
    } finally {
      handleClosetaskForm()
    }
  }

  return (
    <Fragment>
      <Calendar
        onPanelChange={onPanelChange}
        cellRender={cellRender}
        onSelect={(date) => {
          setOpenTaskDate(date)
        }}
      />
      <Modal 
        open={!!openedTaskDate}
        onCancel={() => setOpenTaskDate(null)}
        onOk={form.submit}
        closable
      >
        <Form form={form} onFinish={hanldeCreateTsk}>
          <Flex vertical>
            <FormItem
              name={'task'}
            >
              <Input placeholder={'New task'} />
            </FormItem>

            <FormItem
              name={'status'}
              label={'Status'}
            >
              {statusItem(statusesData?.statuses as Status[], 'status', statusValue)}
            </FormItem>

            <FormItem
              name={'dueDate'}
              label={'Due date'}
            >
              <DatePicker
                format={'DD MMM'}
                showNow={false}
                style={{width: '100%'}}
              />
            </FormItem>

            <FormItem
              name={'priority'}
              label={'Priority'}
            >
              {statusItem(prioritiesData?.statuses as Status[], 'priority', priorityValue)}
            </FormItem>
            <FormItem
              name={'notes'}
              label={'Notes'}
            >
              <Input />
            </FormItem>
            <FormItem
              name={'files'}
              label={'Files'}
            >
              <Upload>
                <Button type={'default'} icon={<FileAddOutlined style={{ fontSize: 18, color: '#000' }} />} />
              </Upload>
            </FormItem>
          </Flex>
        </Form>
      </Modal>
    </Fragment>
  )
}