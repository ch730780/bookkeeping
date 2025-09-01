import Income from '../models/income.model';
import { Request, Response } from 'express';

// יצירת הכנסה חדשה
export const createIncome = async (req: Request, res: Response) => {
  try {
    const income = new Income(req.body);
    await income.save();
    res.status(201).json(income);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// קבלת כל ההכנסות
export const getIncomes = async (req: Request, res: Response) => {
  try {
    const incomes = await Income.find().populate('client');
    res.json(incomes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// קבלת הכנסה לפי מזהה
export const getIncomeById = async (req: Request, res: Response) => {
  try {
    const income = await Income.findById(req.params.id).populate('client');
    if (!income) return res.status(404).json({ error: 'Income not found' });
    res.json(income);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// עדכון הכנסה
export const updateIncome = async (req: Request, res: Response) => {
  try {
    const income = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!income) return res.status(404).json({ error: 'Income not found' });
    res.json(income);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// מחיקת הכנסה
export const deleteIncome = async (req: Request, res: Response) => {
  try {
    const income = await Income.findByIdAndDelete(req.params.id);
    if (!income) return res.status(404).json({ error: 'Income not found' });
    res.json({ message: 'Income deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};