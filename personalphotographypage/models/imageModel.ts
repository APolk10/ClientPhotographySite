import { Schema, model, models } from 'mongoose';

const imageSchema = new Schema({
  id: String,
  url: String,
  secureUrl: String,
  date: String,
  format: String,
  folder: String,
  width: Number,
  height: Number
})

const Image = models.Image || model("Image", imageSchema);

export default Image;