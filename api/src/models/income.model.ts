import { Schema, model } from 'mongoose';

const incomeSchema = new Schema({
  receiptNumber: Number,
  date: Date,
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
  amount: Number,
  vat: Number,
  paymentType: String, 
  details: String,
  printDate: Date,
  paymentDetails: {
    cash: {
      amount: Number,
    },
    credit: {
      last4Digits: String,
      amount: Number,
      installments: Number,
    },
    check: {
      number: String,
      accountNumber: String,
      bankNumber: String,
      amount: Number,
      dueDate: Date,
    },
    bankTransfer: {
      number: String,
      accountNumber: String,
      bankNumber: String,
      amount: Number,
      dueDate: Date,
    },
  },
});

export default model('Income', incomeSchema);