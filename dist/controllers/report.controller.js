import Income from '../models/income.model';
import Expense from '../models/expense.model';
// דוח הכנסות מול הוצאות לפי תאריכים
export const incomeVsExpense = async (req, res) => {
    const { from, to } = req.query;
    try {
        const incomes = await Income.find({
            date: { $gte: new Date(from), $lte: new Date(to) }
        });
        const expenses = await Expense.find({
            date: { $gte: new Date(from), $lte: new Date(to) }
        });
        res.json({ incomes, expenses });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// דוח הכנסות לפי לקוח
export const incomeByClient = async (req, res) => {
    const { clientId } = req.query;
    try {
        const incomes = await Income.find({ client: clientId }).populate('client');
        res.json(incomes);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// דוח הכנסות לפי תאריך
export const incomeByDate = async (req, res) => {
    const { from, to } = req.query;
    try {
        const incomes = await Income.find({
            date: { $gte: new Date(from), $lte: new Date(to) }
        });
        res.json(incomes);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// דוח הכנסות לפי סוג תשלום
export const incomeByPaymentType = async (req, res) => {
    const { paymentType } = req.query;
    try {
        const incomes = await Income.find({ paymentType });
        res.json(incomes);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// דוח הוצאות לפי קטגוריה
export const expenseByCategory = async (req, res) => {
    const { categoryId } = req.query;
    try {
        const expenses = await Expense.find({ category: categoryId }).populate('category');
        res.json(expenses);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// דוח הוצאות לפי תאריך
export const expenseByDate = async (req, res) => {
    const { from, to } = req.query;
    try {
        const expenses = await Expense.find({
            date: { $gte: new Date(from), $lte: new Date(to) }
        });
        res.json(expenses);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// דוח הוצאות לפי סוג תשלום
export const expenseByPaymentType = async (req, res) => {
    const { paymentType } = req.query;
    try {
        const expenses = await Expense.find({ paymentType });
        res.json(expenses);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
