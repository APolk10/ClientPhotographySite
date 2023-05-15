import nc from "next-connect";
import { getFamilyImages } from '../../../controller/imageController';
import onError from '../../../middlewares/error';

const handler = nc({ onError })

handler.get(getFamilyImages);

export default handler;