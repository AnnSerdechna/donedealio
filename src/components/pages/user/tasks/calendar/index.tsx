"use client";

import React, { FC, Fragment, useState } from 'react';
import { App, Badge, Calendar, DatePicker, Flex, Form, Input, Modal, Upload } from 'antd';
import type { BadgeProps, CalendarProps, UploadProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { Button, FormItem } from '@/components/ui';
import { FileAddOutlined } from '@ant-design/icons'

import { Priority, Status, usePrioritiesQuery, useStatusesQuery } from '@/graphql/types';
import { StatusField } from '@/components/elements';


export const CalendarView: FC = () => {
  const [form] = Form.useForm();
  const {message} = App.useApp();

  const { data: statusesData } = useStatusesQuery();
  const { data: prioritiesData } = usePrioritiesQuery();
  const [openedTaskDate, setOpenTaskDate] = useState<Dayjs | null>(null)

  const statusValue= Form.useWatch('status', form);
  const priorityValue = Form.useWatch('priority', form);

  const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

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

  const handleClosetaskForm = () => {
    form.resetFields();
    setOpenTaskDate(null);
  }
 
  const hanldeCreateTsk = (values: any) => {
    try {
      console.log(values, 'Values')
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
        okButtonProps={{size: 'large'}}
        cancelButtonProps={{ size: 'large' }}
        okText={'Create'}
        confirmLoading={false}
        styles={{content: {padding: '58px 32px 32px'}}}
        closable
      >
        <Form 
          form={form} 
          onFinish={hanldeCreateTsk}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign={'left'}
          colon={false}
          size={'large'}
        >
          <Flex vertical>
            <FormItem
              name={'task'}
              label={'Task'}
            >
              <Input />
            </FormItem>

            <FormItem
              name={'status'}
              label={'Status'}
            >
              <StatusField
                form={form}
                data={statusesData?.statuses as Status[]}
                status={statusValue as Status}
                updatedField={'status'}
              />
            </FormItem>

            <FormItem
              name={'dueDate'}
              label={'Due date'}
            >
              <DatePicker
                format={'DD MMM'}
                showNow={false}
                placeholder=''
                style={{width: '100%'}}
              />
            </FormItem>

            <FormItem
              name={'priority'}
              label={'Priority'}
            >
              <StatusField
                form={form}
                data={prioritiesData?.priorities as Priority[]}
                status={priorityValue as Priority}
                updatedField={'priority'}
              />
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
              <Upload {...props}>
                <Button icon={<FileAddOutlined style={{color: '#d9d9d9'}} />} type={'default'} ghost />
              </Upload>
            </FormItem>
          </Flex>
        </Form>
      </Modal>
    </Fragment>
  )
}