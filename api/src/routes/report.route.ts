import express from 'express';
import {
  incomeVsExpense,
  incomeByClient,
  incomeByDate,
  incomeByPaymentType,
  expenseByCategory,
  expenseByDate,
  expenseByPaymentType,
} from '../controllers/report.controller';

const router = express.Router();

router.get('/income-vs-expense', incomeVsExpense);
router.get('/income-by-client', incomeByClient);
router.get('/income-by-date', incomeByDate);
router.get('/income-by-payment-type', incomeByPaymentType);
router.get('/expense-by-category', expenseByCategory);
router.get('/expense-by-date', expenseByDate);
router.get('/expense-by-payment-type', expenseByPaymentType);

export default router;