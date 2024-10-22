'use client';

import { Card, Dropdown, MenuProps } from 'antd';
import { FC } from 'react';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

import { Button, Text } from '@/components/ui';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { WorkspaceValuesProps } from '@/schemas/types';

type WorkspaceCardProps = WorkspaceValuesProps & {
  id: string
  onEdit: VoidFunction
  onRemove: VoidFunction
}

export const WorkspaceCard: FC<WorkspaceCardProps> = ({ id, name, description, onEdit, onRemove }) => {
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
      onClick={() => router.push(`/workspace/${id}/table`)}
      style={{ cursor: 'pointer' }}
      extra={(
        <Dropdown
          menu={{ items }}
          trigger={['click']}
        >
          <Button
            size={'small'}
            type={'link'}
            icon={<MoreOutlined style={{fontSize: 18}} />}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); 
            }}
          />
        </Dropdown>
      )}
    >
      <Text>{description}</Text>
    </Card>
  )
}