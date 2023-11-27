import { useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';

import { Modal } from 'components/Modal';

import { WidgetProps } from '@rjsf/utils';

import { Editor } from '../Editor';
import * as S from './styled';

export const File = (rest: WidgetProps) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File>();
  const [cutImage, setCutImage] = useState<string>(rest.value);

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    setFile(info.file.originFileObj!);
    setOpen(true);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{rest.placeholder}</div>
    </div>
  );

  return (
    <>
      <S.Root
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        onChange={handleChange}
      >
        {cutImage ? (
          <img src={cutImage} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </S.Root>

      <Modal open={open} setOpen={setOpen}>
        <Editor
          file={file!}
          callbackImage={(url) => {
            rest.onChange(url);
            setCutImage(url);
            setOpen(false);
          }}
        />
      </Modal>
    </>
  );
};
