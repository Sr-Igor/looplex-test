//AWS
import { S3 } from 'aws-sdk';
// import dotenv from 'dotenv';
// dotenv.config();

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

export const s3Upload = async (file: File) => {
  if (!file.name) throw new Error('File type not found');

  // const params = {
  //   Bucket: process.env.AWS_BUCKET_NAME as string,
  //   Key: file.name,
  //   Body: file,
  //   ACL: 'public-read',
  //   ContentType: file.type
  // };

  // const up = await s3.upload(params).promise();
  // return up;

  //NOTE: Mocked return
  return {
    Location:
      'https://looplex.s3.amazonaws.com/looplex-user-token-1619695222.png',
    Bucket: 'looplex',
    Key: 'looplex-user-token-1619695222.png',
    ETag: '"e8f1a0a2f6c8a5d7a0f2f2b0a6c8f0e8"',
    VersionId: 'null'
  };
};

export const s3Delete = async (filename: string) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: filename
  };

  await s3.deleteObject(params).promise();
};
