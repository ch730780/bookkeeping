import { Schema, model, Document } from 'mongoose';

export interface IClient extends Document {
  name: string;
  phone?: string;
  email?: string;
  address?: string;
}

const ClientSchema = new Schema<IClient>({
  name: { type: String, required: true },
  phone: String,
  email: String,
  address: String,
});

export default model<IClient>('Client', ClientSchema);