import Expense from '../models/expense.model';
// יצירת הוצאה חדשה
export const createExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
// קבלת כל ההוצאות
export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().populate('supplier category');
        res.json(expenses);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// קבלת הוצאה לפי מזהה
export const getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id).populate('supplier category');
        if (!expense)
            return res.status(404).json({ error: 'Expense not found' });
        res.json(expense);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// עדכון הוצאה
export const updateExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!expense)
            return res.status(404).json({ error: 'Expense not found' });
        res.json(expense);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
// מחיקת הוצאה
export const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);
        if (!expense)
            return res.status(404).json({ error: 'Expense not found' });
        res.json({ message: 'Expense deleted' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
