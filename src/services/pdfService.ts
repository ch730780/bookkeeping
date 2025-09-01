import crypto from 'crypto';
import fs from 'fs';
import PDF from '../models/PDF';

export class PDFService {
  static generateFileHash(filePath: string): string {
    const fileBuffer = fs.readFileSync(filePath);
    return crypto.createHash('md5').update(fileBuffer).digest('hex');
  }

  static async checkDuplicate(fileHash: string): Promise<boolean> {
    const existingPDF = await PDF.findOne({ fileHash });
    return !!existingPDF;
  }

  static async savePDF(filename: string, originalName: string, fileHash: string, size: number) {
    const pdf = new PDF({
      filename,
      originalName,
      fileHash,
      size
    });
    return await pdf.save();
  }
}