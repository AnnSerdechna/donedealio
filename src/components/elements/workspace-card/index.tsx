import { Card, Dropdown, MenuProps } from 'antd';
import { FC } from 'react';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';

import { Button, Text } from '@/components/ui';

type WorkspaceCardProps = {
  id: string
  name: string
  description: string
  onEdit: VoidFunction
  onRemove: VoidFunction
}

export const WorkspaceCard: FC<WorkspaceCardProps> = ({ id, name, description, onEdit, onRemove }) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <EditOutlined />,
      label: 'Edit workspace',
      onClick: onEdit,
    },
    {
      key: '2',
      label: 'Delete workspace',
      icon: <DeleteOutlined />,
      onClick: onRemove,
    },
  ];

  return (
    <Card 
      title={name} 
      extra={(
        <Dropdown 
          menu={{ items }}
          trigger={['click']}
        >
          <Button size={'small'} type={'link'} icon={<MoreOutlined />} />
        </Dropdown>
      )} 
      style={{ width: 300 }}
    >
      <Text>{description}</Text>
    </Card>
  )
}