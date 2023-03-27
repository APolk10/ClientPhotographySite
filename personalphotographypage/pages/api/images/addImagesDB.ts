// take the array of image objects and iterate through to add to database if not already present
import Image from '../../../models/imageModel';
import axios from 'axios';
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

 axios.get(`${process.env.CLOUDINARY_QUERY}`)
    .then(response => {
      addImages(response.data.resources)
    })
    .catch(error => {
      console.error(error);
    })

export async function addImages(images: ImageShape[]) {
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


