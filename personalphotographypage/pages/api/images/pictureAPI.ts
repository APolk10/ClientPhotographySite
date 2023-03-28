// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import { getAllImages, getFolderImages } from '../../../controller/imageController';
import onError from '../../../middlewares/error';

type Data = {
  data: string
}

const handler = nc({ onError })

handler.post(getFolderImages)

handler.get(getFolderImages);

export default handler;