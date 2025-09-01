import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  businessNumber: String,
});

export default model('Client', clientSchema);