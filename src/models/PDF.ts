import mongoose, { Schema, Document } from 'mongoose';

export interface IPDF extends Document {
  filename: string;
  originalName: string;
  fileHash: string;
  size: number;
  uploadDate: Date;
}

const PDFSchema: Schema = new Schema({
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  fileHash: { type: String, required: true, unique: true },
  size: { type: Number, required: true },
  uploadDate: { type: Date, default: Date.now }
});

export default mongoose.model<IPDF>('PDF', PDFSchema);