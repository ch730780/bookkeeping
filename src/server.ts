import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import pdfRoutes from './routes/pdfRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pdf-upload';

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/pdf', pdfRoutes);

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connecting to Mongo DB was successful.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to Mongo DB:', error);
  });