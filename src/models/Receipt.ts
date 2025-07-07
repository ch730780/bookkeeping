import { Schema, model, Document, Types } from 'mongoose';
import { PaymentSchema } from './Payment';

export interface IReceipt extends Document {
  number: string;
  date: Date;
  client: Types.ObjectId;
  amount: number;
  vat: number;
  payment: any;
  details?: string;
  printDate?: Date;
}

const ReceiptSchema = new Schema<IReceipt>({
  number: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  client: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  amount: { type: Number, required: true },
  vat: { type: Number, required: true },
  payment: { type: PaymentSchema, required: true },
  details: String,
  printDate: Date,
});

export default model<IReceipt>('Receipt', ReceiptSchema);