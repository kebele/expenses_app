// helper.js içinde app'ın her yerinde kullanacağımız tekrar yazmak istemediğimiz func koyarız, gerektğinde buradan çağırırız.

// wait
export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

// random color
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// delete item

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// create budget

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

// create expense

export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};
