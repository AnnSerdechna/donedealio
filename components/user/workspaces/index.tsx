'use client';

import { FC, Fragment, useState } from 'react';
import { App, Flex, Modal } from 'antd';
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
import { ContentContainer, WorkspaceFormContent, WorkspaceCard } from '@/components/user';

export const Workspaces: FC<{ userId: string }> = ({ userId }) => {
  const createForm = useForm();
  const updateForm = useForm();

  const { modal, message } = App.useApp();
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [isValueChange, setIsValueChange] = useState(false);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState('');

  const { data: workspacesData, refetch } = useWorkspacesQuery({ variables: { where: { userId: { equals: userId } } } })
  const [createWorkspace, { loading: createLoading }] = useCreateOneWorkspaceMutation();
  const [updateWorkspace, { loading: updateLoading }] = useUpdateOneWorkspaceMutation();
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
      message.error('Something went wrong!');
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
            name: { set: `${values.name}` },
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
      message.error('Something went wrong!');
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
    } catch (error) {
      console.log(error, 'Delete Workspace error');
      message.error('Something went wrong!')
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
    modal.confirm({
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
      <ContentContainer
        title={'Workspaces'}
        headerActions={(
          <Button
            wide={false}
            icon={<PlusOutlined />}
            text={'Add workspace'}
            onClick={onOpenCreateModal}
            type={'default'}
          />
        )}
      >
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
      </ContentContainer>

      <Modal
        open={openModalCreate}
        onCancel={onCloseCreateModal}
        footer={false}
        centered
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
        centered
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