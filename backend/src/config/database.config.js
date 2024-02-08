import {connect, set} from "mongoose";
import { UserModel } from '../Models/user.model.js';
import { ProductModel } from '../Models/product.model.js';
import { sample_users } from '../data.js';
import { sample_products } from '../data.js';
import bcrypt from 'bcryptjs';
const PASSWORD_HASH_SALT_ROUNDS = 10;
set('strictQuery', true);

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await seedUsers();
    await seedProducts();
    console.log('connect successfully---');
  } catch (error) {
    console.log(error);
  }
};

async function seedUsers() {
  const usersCount = await UserModel.countDocuments();
  if (usersCount > 0) {
    console.log('Users seed is already done!');
    return;
  }

  for (let user of sample_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  }

  console.log('Users seed is done!');
}

async function seedProducts() {
  const products = await ProductModel.countDocuments();
  if (products > 0) {
    console.log('Product seed is already done!');
    return;
  }

  for (const product of sample_products) {
    product.imageUrl = `/products/${product.imageUrl}`;
    await ProductModel.create(product);
  }

  console.log('Product seed Is Done!');
}