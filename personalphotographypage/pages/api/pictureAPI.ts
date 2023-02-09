// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import imagesDB from './imagesDB';

type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {

  const options = {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  }

  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  axios.get(`${process.env.CLOUDINARY_QUERY}`)
    .then(response => {
      const images = response.data.resources;
      imagesDB(images);
      res.json({data: 'Pictures successfully uploaded to database'});
    })
    .catch(error => {
      res.end(error);
    })
}
