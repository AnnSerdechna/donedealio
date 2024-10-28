'use client';

import { Card, Col, Dropdown, Flex, MenuProps } from 'antd';
import { FC } from 'react';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

import { Button, Text, VSpace } from '@/components/ui';
import { WorkspaceValuesProps } from '@/schemas/types';
import styles from './index.module.scss';
import { Task } from '@/graphql/types';
import { StatusBar } from '../../status-bar';

type WorkspaceCardProps = WorkspaceValuesProps & {
  id: string
  tasks: Task[]
  tasksCount: number
  onEdit: VoidFunction
  onRemove: VoidFunction
}

export const WorkspaceCard: FC<WorkspaceCardProps> = ({ id, name, description, tasks, tasksCount, onEdit, onRemove }) => {
  const router = useRouter();

  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <EditOutlined />,
      label: 'Edit workspace',
      onClick: (e) => {
        e.domEvent.stopPropagation();
        onEdit()
      },
    },
    {
      key: '2',
      label: 'Delete workspace',
      icon: <DeleteOutlined />,
      onClick: (e) => {
        e.domEvent.stopPropagation(); 
        onRemove();
      },
    },
  ];

  return (
    <Card
      title={name}
      size={'small'}
      className={styles.workspaceCard}
      onClick={() => router.push(`/workspace/${id}/table`)}
      style={{ cursor: 'pointer' }}
      styles={{ body: { padding: 16}, header: { padding: 16, fontSize: 18}}}
      extra={(
        <Dropdown
          menu={{ items }}
          trigger={['click']}
        >
          <Button
            size={'small'}
            type={'link'}
            icon={<MoreOutlined style={{fontSize: 24, color: '#444'}} />}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); 
            }}
          />
        </Dropdown>
      )}
    >
      <VSpace>
        <Text>{description}</Text>
        
        <Flex justify={'space-between'}>
          <Col span={8} style={{padding: 0}}>
            <Text strong>Tasks ({tasksCount})</Text></Col>
          <Col span={12} style={{ padding: 0 }}>
            <StatusBar tasks={tasks} />
          </Col>
        </Flex>
      </VSpace>
    </Card>
  )
}