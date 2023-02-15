import catchAsyncError from "../middlewares/catchAsyncError";
import { NextApiRequest, NextApiResponse } from "next";
import Image from '../models/imageModel';

const getAllImages = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {
  const images = await Image.find();

  res.status(200).json({images});
});

const getFolderImages = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {

  const images = await Image.find({folder: `Tim Photography/${req.body.folder}`})

  res.status(200).json({images});
})

export { getAllImages, getFolderImages };
