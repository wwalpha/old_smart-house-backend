import { Context, Callback } from 'aws-lambda';
import { S3 } from 'aws-sdk';

export const handler = (event: any, context: Context, callback: Callback) => {
  const { key = '' } = event;
  const s3 = new S3();

  const url = s3.getSignedUrl('getObject', {
    Bucket: process.env.BUCKET_NAME,
    Key: key,
    Expires: 60,
  });

  callback(null, url);
};
