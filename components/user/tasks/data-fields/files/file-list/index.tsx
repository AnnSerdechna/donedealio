import { Flex, Typography, Button } from 'antd'
import { FC, Fragment } from 'react'
import { DeleteOutlined } from '@ant-design/icons';

const { Link } = Typography;

type FilesProps = {
  id?: number
  uid?: string
  name: string
  url: string
  fileId?: string
}
type FileListProps = {
  files: FilesProps[] | any[]
  deletedFileId: string
  deleteLoading: boolean
  handleDeleteFile: (publicId: string, id?: number) => void
};

export const FileList: FC<FileListProps> = ({ files, deletedFileId, deleteLoading, handleDeleteFile }) => (
  <Fragment>
    {files?.map(file => (
      <Flex key={file?.url} align={'center'} gap={16}>
        <Link href={file.url} ellipsis>{file?.name}</Link>

        <Button
          size={'small'}
          type="link"
          loading={deletedFileId === (file.uid ?? file.fileId) ? deleteLoading : false}
          icon={<DeleteOutlined style={{ color: 'red' }} />}
          onClick={() => {
            if (!!file?.uid) {
              handleDeleteFile(file.uid)
            }

            if (!!file?.fileId) {
              handleDeleteFile(file.fileId, file.id)
            }
          }}
        />
      </Flex>
    ))}
  </Fragment>
)