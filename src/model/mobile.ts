import mongoose, { Schema, Document } from 'mongoose';

export interface IMobile extends Document {
  brand: string;
  model: string;
  price: number;
}

const MobileSchema: Schema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
});

const Mobile = mongoose.model<IMobile>('Mobile', MobileSchema);

export default Mobile;
