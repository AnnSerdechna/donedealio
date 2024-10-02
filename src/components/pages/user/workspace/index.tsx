'use client';

import { useSession } from 'next-auth/react';
import { FC, Fragment, useState } from 'react';

import { Button, FormItem, Form } from '@/components/ui';
import { useCreateOneWorkspaceMutation, useDeleteOneWorkspaceMutation, useUpdateOneWorkspaceMutation, useWorkspacesQuery, WorkspaceCreateInput} from '@/graphql/types';
import { Flex, Input, message, Modal } from 'antd';
import { WorkspaceCard } from '@/components/elements/workspace-card';
import { WorkspaceUpdateInput } from '../../../../../prisma/generated/type-graphql';
import { useForm } from 'antd/es/form/Form';

type WorkspaceProps = {
  id: string
  name: string
  description: string
}

const WorkspaceFormContent: FC<{ loading: boolean, btntext: 'Add' | 'Edit' }> = ({ loading, btntext  }) => {
  return (
    <Fragment>
      <FormItem
        name={'name'}
        label={"Name"}
        rules={[
          {
            required: true,
            message: 'Please input workspace name!',
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem
        name={'description'}
        label={"Description"}
      >
        <Input />
      </FormItem>

      <FormItem>
        <Button text={btntext} htmlType={'submit'} loading={loading} />
      </FormItem>
    </Fragment>
  )
}
export const WorkspacePage: FC = () => {
  const createForm = useForm();
  const updateForm = useForm();
  const [modalApi, contextModal] = Modal.useModal();
  const [messageApi, contextMessage] = message.useMessage();
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState('');

  const { data: session } = useSession();
  const { data: workspacesData, refetch } = useWorkspacesQuery({ variables: { where: { userId: { equals: session?.user?.id } } } })
  const [createWorkspace, { loading: createLoading }] = useCreateOneWorkspaceMutation();
  const [updateWorkspace, {loading: updateLoading}] = useUpdateOneWorkspaceMutation();
  const [deleteWorkspase, { loading: deleteLoading }] = useDeleteOneWorkspaceMutation()

  const handleCreateWorkspace = async (values: WorkspaceCreateInput) => {
    try {
      await createWorkspace({
        variables: {
          data: {
            name: values.name,
            description: values.description,
            user: { connect: { id: session?.user?.id } }
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
      setOpenModalUpdate(false)
      setSelectedWorkspaceId('')
    }
  }

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
  }

  const onEditWorkspace = (id: string, name: string, description: string) => {
    updateForm[0].setFieldsValue({
      name,
      description,
    })
    setSelectedWorkspaceId(id);
    setOpenModalUpdate(true)
  }

  const onRemoveWorkspace = (id: string) => {
    modalApi.confirm({
      title: 'Are you sure you want to delete warkspace?',
      onOk: () => handleDeleteWorkspace(id)
    })
  }

  return (
    <Fragment>
      {contextMessage}
      {contextModal}
      <Flex vertical gap={40}>
        <Flex justify={'end'}>
          <Button wide={false} text={'Add workspace'} onClick={() => setOpenModalCreate(true)} />
        </Flex>

        <Flex gap={24} wrap>
          {workspacesData?.workspaces?.map(item => (
            <WorkspaceCard
              key={item?.id}
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
        onCancel={() => setOpenModalCreate(false)}
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
        onCancel={() => setOpenModalUpdate(false)}
        footer={false}
      >
        <Form 
          form={updateForm[0]} 
          onFinish={handleUpdateWorkspace}
        >
          <WorkspaceFormContent loading={updateLoading} btntext={'Edit'} />
        </Form>
      </Modal>
    </Fragment>
  )
}