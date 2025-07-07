import { Schema } from 'mongoose';

export const PaymentSchema = new Schema(
  {
    type: {
      type: String,
      enum: ['CASH', 'CREDIT', 'CHECK', 'BANK_TRANSFER'],
      required: true,
    },
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
  { _id: false }
);