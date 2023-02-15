// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from "next-connect";
import { getAllImages, getFolderImages } from '../../../controller/imageController';
import onError from '../../../middlewares/error';
import NextCors from 'nextjs-cors';
import addImages from './addImagesDB';

type Data = {
  data: string
}

const handler = nc({ onError })

handler.post(getFolderImages)

handler.get(getAllImages);
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
//   ) {

//   await NextCors(req, res, {
//     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//     origin: '*',
//     optionsSuccessStatus: 200,
//   });

//   axios.get(`${process.env.CLOUDINARY_QUERY}`)
//     .then(response => {
//       const images = response.data.resources;
//       addImages(images);
//       res.json({data: 'Pictures successfully uploaded to database'});
//     })
//     .catch(error => {
//       res.end(error);
//     })
// }
export default handler;