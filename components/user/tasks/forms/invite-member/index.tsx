'use client';

import { FormInstance, Input } from 'antd'
import { FC } from 'react'

import { Form, FormItem, VSpace } from '@/components/ui'

export const InviteMemberForm: FC<{ form: FormInstance }> = ({ form }) => {
  return (
    <Form form={form}>
      <VSpace>
        <FormItem
          name={'email'}
          label={'Email'}
        >
          <Input type={'email'} />
        </FormItem>
      </VSpace>
    </Form>
  )
}