import { Schema, model, Document, Types } from 'mongoose';
import { PaymentSchema } from './Payment';

export interface IExpense extends Document {
  number: string;
  date: Date;
  supplier: Types.ObjectId;
  category: Types.ObjectId;
  amount: number;
  vat: number;
  payment: any;
  reference?: string;
  fileUrl?: string;
}

const ExpenseSchema = new Schema<IExpense>({
  number: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  amount: { type: Number, required: true },
  vat: { type: Number, required: true },
  payment: { type: PaymentSchema, required: true },
  reference: String,
  fileUrl: String,
});

export default model<IExpense>('Expense', ExpenseSchema);