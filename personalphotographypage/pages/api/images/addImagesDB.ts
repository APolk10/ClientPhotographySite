// take the array of image objects and iterate through to add to database if not already present
import Image from '../../../models/imageModel';
import connectMongo from '../../../utils/connectMongo';

interface ImageShape {
  asset_id: String,
  url: String,
  secure_url: String,
  created_at: String,
  format: String,
  folder: String,
  width: Number,
  height: Number
}

export default async function addImages(images: ImageShape[]) {
  await connectMongo();

  images.forEach((image) => {
    findImage(image);
  })
  console.log('Images successfully uploaded');
}

export async function findImage(image: ImageShape) {
  const exists = await Image.findOne({id: image.asset_id});
  if (!exists) {
    Image.create({
      id: image.asset_id,
      url: image.url,
      secureUrl: image.secure_url,
      date: image.created_at,
      format: image.format,
      folder: image.folder,
      width: image.width,
      height: image.height
    })
  }
}
