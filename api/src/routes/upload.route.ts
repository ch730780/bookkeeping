import express, { Request } from 'express';
import multer, { File as MulterFile } from 'multer';
import Category from '../models/category.model';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req: Request & { file?: MulterFile }, res) => {
  const { name, description } = req.body;
  try {
    const exists = await Category.findOne({ name });
    if (exists) {
      return res.status(409).json({ error: 'Category already exists' });
    }
    const category = new Category({
      name,
      description,
      file: req.file?.filename,
    });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;