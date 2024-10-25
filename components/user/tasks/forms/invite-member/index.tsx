import { Input } from 'antd'

import { Form, FormItem, VSpace } from '@/components/ui'

export const InviteMemberForm = () => {
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