// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
import NextCors from 'nextjs-cors';
import { resolve } from 'path';


type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {

  const options = {
    method: 'GET',
    url: process.env.CLOUDINARY_QUERY
  }

  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  try {
    let response = await axios(options);
    res.send(response.data);
    return;
  } catch (error: any) {
    res.send({data: error})
  }
}
