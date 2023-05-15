import catchAsyncError from "../middlewares/catchAsyncError";
import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import Image from '../models/imageModel';

// const getAllImages = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log('getAllImages correctly fired');
//   const images = await Image.find();
//   console.log(images);
//   res.status(200).json({images});
// });

const getWeddingImages = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {
  axios.get(`https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/list/wedding.json`)
  .then(response => res.send(response.data.resources))
  .catch(err => console.error(err));
  // const images = await Image.find({folder: `Tim Photography/${req.body.folder}`});
  // console.log(images);

  // res.status(200).json({images});
});

const getFamilyImages = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {
  axios.get(`https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/list/family.json`)
  .then(response => res.send(response.data.resources))
  .catch(err => console.error(err));
})

// const getSingleImage = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {
//   const image = await Image.findOne()
// })

export { getWeddingImages, getFamilyImages };
