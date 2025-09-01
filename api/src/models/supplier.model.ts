import { Schema, model } from 'mongoose';

const supplierSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  businessNumber: String,
});

export default model('Supplier', supplierSchema);