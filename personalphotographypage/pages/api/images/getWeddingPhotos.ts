import nc from "next-connect";
import { getWeddingImages } from '../../../controller/imageController';
import onError from '../../../middlewares/error';

const handler = nc({ onError })

handler.get(getWeddingImages);

export default handler;