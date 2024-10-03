import { Button, FormItem } from '@/components/ui'
import { Input } from 'antd'
import { FC, Fragment } from 'react'

type WorkspaceFormContentProps = {
  loading: boolean,
  disabled?: boolean,
  btntext: 'Add' | 'Edit'
}

export const WorkspaceFormContent: FC<WorkspaceFormContentProps> = ({ loading, disabled = false, btntext }) => {
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
        <Input.TextArea />
      </FormItem>

      <FormItem>
        <Button text={btntext} htmlType={'submit'} loading={loading} disabled={disabled} />
      </FormItem>
    </Fragment>
  )
}