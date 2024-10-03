'use client';

import { useSession } from 'next-auth/react';
import { FC, Fragment, useState } from 'react';
import { Flex, message, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';

import { 
  useCreateOneWorkspaceMutation, 
  useDeleteOneWorkspaceMutation, 
  useUpdateOneWorkspaceMutation, 
  useWorkspacesQuery, 
  WorkspaceCreateInput,
  WorkspaceUpdateInput,
} from '@/graphql/types';
import { Button, Form } from '@/components/ui';
import { WorkspaceFormContent ,WorkspaceCard } from '@/components/elements';

export const WorkspacesPage: FC = () => {
  const createForm = useForm();
  const updateForm = useForm();
  const {data: session} = useSession();
  const [modalApi, contextModal] = Modal.useModal();
  const [messageApi, contextMessage] = message.useMessage();
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [isValueChange, setIsValueChange] = useState(false);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState('');

  const userId = session?.user?.id as string;

  const { data: workspacesData, refetch } = useWorkspacesQuery({ variables: { where: { userId: { equals: userId } } } })
  const [createWorkspace, { loading: createLoading }] = useCreateOneWorkspaceMutation();
  const [updateWorkspace, {loading: updateLoading}] = useUpdateOneWorkspaceMutation();
  const [deleteWorkspase] = useDeleteOneWorkspaceMutation();

  const handleCreateWorkspace = async (values: WorkspaceCreateInput) => {
    try {
      await createWorkspace({
        variables: {
          data: {
            name: values.name,
            description: values.description,
            user: { connect: { id: userId as string } }
          }
        }
      });

      refetch();
    } catch (error) {
      console.log(error, 'Create Workspace error');
      messageApi.error('Something went wrong!');
    } finally {
      createForm[0].resetFields();
      setOpenModalCreate(false)
    }
  }

  const handleUpdateWorkspace = async (values: WorkspaceUpdateInput) => {
    try {
      await updateWorkspace({
        variables: {
          data: {
            name: { set: `${values.name}`},
            description: { set: `${values.description}` },
          },
          where: {
            id: selectedWorkspaceId
          }
        }
      });

      refetch();
    } catch (error) {
      console.log(error, 'Update Workspace error');
      messageApi.error('Something went wrong!');
    } finally {
      updateForm[0].resetFields();
      setOpenModalUpdate(false);
      setIsValueChange(false);
      setSelectedWorkspaceId('');
    }
  };

  const handleDeleteWorkspace = async (id: string) => {
    try {
      await deleteWorkspase({
        variables: {
          where: {
            id
          }
        }
      });
      refetch();
    } catch(error) {
      console.log(error, 'Delete Workspace error');
      messageApi.error('Something went wrong!')
    }
  };

  const onEditWorkspace = (id: string, name: string, description: string) => {
    updateForm[0].setFieldsValue({
      name,
      description,
    })
    setSelectedWorkspaceId(id);
    setOpenModalUpdate(true)
  };

  const onRemoveWorkspace = (id: string) => {
    modalApi.confirm({
      title: 'Are you sure you want to delete warkspace?',
      onOk: () => handleDeleteWorkspace(id)
    })
  };

  const onOpenCreateModal = () => setOpenModalCreate(true);
  
  const onCloseCreateModal = () => setOpenModalCreate(false);

  const onCloseEditModal = () => {
    setOpenModalUpdate(false);
    setIsValueChange(false);
  };

  return (
    <Fragment>
      {contextMessage}
      {contextModal}
      <Flex vertical gap={40}>
        <Flex justify={'end'}>
          <Button 
            wide={false} 
            icon={<PlusOutlined />} 
            text={'Add workspace'} 
            onClick={onOpenCreateModal} 
            ghost
          />
        </Flex>

        <Flex gap={24} wrap>
          {workspacesData?.workspaces?.map(item => (
            <WorkspaceCard
              key={item?.id}
              userId={userId}
              id={item?.id}
              name={item?.name}
              description={item?.description}
              onEdit={() => onEditWorkspace(item?.id, item?.name, item?.description)}
              onRemove={() => onRemoveWorkspace(item.id)}
            />
          ))}
        </Flex>
      </Flex>

      <Modal
        open={openModalCreate}
        onCancel={onCloseCreateModal}
        footer={false}
      >
        <Form 
          form={createForm[0]} 
          onFinish={handleCreateWorkspace}
        >
          <WorkspaceFormContent loading={createLoading} btntext={'Add'} />
        </Form>
      </Modal>

      <Modal
        open={openModalUpdate}
        onCancel={onCloseEditModal}
        footer={false}
      >
        <Form 
          form={updateForm[0]} 
          onFinish={handleUpdateWorkspace}
          onValuesChange={() => setIsValueChange(true)}
        >
          <WorkspaceFormContent 
            loading={updateLoading} 
            btntext={'Edit'}
            disabled={!isValueChange} 
          />
        </Form>
      </Modal>
    </Fragment>
  )
}