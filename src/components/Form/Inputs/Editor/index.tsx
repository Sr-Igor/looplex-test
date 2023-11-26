import '@pqina/pintura/pintura.css';
import { getEditorDefaults } from '@pqina/pintura';
import { PinturaEditor } from '@pqina/react-pintura';
import { s3Upload } from 'config/aws';

export interface IEditor {
  file: File;
  callbackImage: (image: string) => void;
}

export const Editor = ({ file, callbackImage }: IEditor) => {
  const handleUpload = async (file: File) => {
    const item = await s3Upload(file);
    const image = item.Location;

    const blob = URL.createObjectURL(file) || image;
    //NOTE: Return item.Location in real app
    callbackImage(blob);
  };

  return (
    <div style={{ height: '65vh' }}>
      <PinturaEditor
        {...getEditorDefaults()}
        src={file}
        onProcess={(res) => handleUpload(res.dest)}
      />
    </div>
  );
};
