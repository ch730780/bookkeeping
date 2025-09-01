import express from 'express';
import fs from 'fs';
import { upload } from '../middleware/upload';
import { PDFService } from '../services/pdfService';

const router = express.Router();

router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'לא נבחר קובץ' });
    }

    const fileHash = PDFService.generateFileHash(req.file.path);
    const isDuplicate = await PDFService.checkDuplicate(fileHash);

    if (isDuplicate) {
      fs.unlinkSync(req.file.path); // מחיקת הקובץ הכפול
      return res.status(409).json({ error: 'קובץ זה כבר קיים במערכת' });
    }

    await PDFService.savePDF(
      req.file.filename,
      req.file.originalname,
      fileHash,
      req.file.size
    );

    res.json({
      message: 'הקובץ הועלה בהצלחה',
      filename: req.file.filename,
      originalName: req.file.originalname
    });
  } catch (error) {
    if (req.file) fs.unlinkSync(req.file.path);
    res.status(500).json({ error: 'שגיאה בהעלאת הקובץ' });
  }
});

export default router;