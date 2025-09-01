import { Schema, model } from 'mongoose';

const expenseSchema = new Schema({
  referenceNumber: Number,
  date: Date,
  supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  amount: Number,
  vat: Number,
  paymentType: String,
  reference: String,
  file: String, 
});

export default model('Expense', expenseSchema);