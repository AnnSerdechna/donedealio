import { Input } from 'antd'

import { Form, FormItem, VSpace } from '@/components/ui'
import { FC } from 'react'

export const InviteMemberForm: FC = () => {
  return (
    <Form>
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