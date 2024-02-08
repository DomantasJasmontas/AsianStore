import { model, Schema } from 'mongoose';

export const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    imageUrl: { type: String, required: true },
    originCountry: { type: [String], required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const ProductModel = model('product', ProductSchema);