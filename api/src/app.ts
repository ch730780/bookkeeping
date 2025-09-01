import express from 'express';
import clientRoutes from './routes/client.route';
import supplierRoutes from './routes/supplier.route';
import categoryRoutes from './routes/category.route';
import incomeRoutes from './routes/income.route';
import expenseRoutes from './routes/expense.route';
import reportRoutes from './routes/report.route';
import uploadRoutes from './routes/upload.route';
import { connectDB } from './db';


const app = express();
app.use(express.json());

app.use('/api/upload', uploadRoutes);

connectDB();

app.use('/api/client', clientRoutes);
app.use('/api/supplier', supplierRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/expense', expenseRoutes);
app.use('/api/report', reportRoutes);

export default app;
