import React from "react";
import { useLoaderData } from "react-router-dom";
import { createBudget, createExpense, fetchData, waait } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";

// loader
// bu loader'ı App.jsx'de route'da loader'a ekleyeceğiz, yani bu route bir loader'a sahip yani oraya gittiğinde bu loader'ı çalıştıracak
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}
// action
export async function dashboardAction({ request }) {
  await waait();
  const data = await request.formData();
  //   const formData = Object.fromEntries(data);
  // artık sadece userName'i değil diğer vale'arı da tutacağız,
  const { _action, ...values } = Object.fromEntries(data);
  //   console.log({ data, request });
  //   console.log(_action);

  // eğer action newUser ise bunu yapacak, yani input hidden aracığılığı ile gelen suböit içinde action
  if (_action === "newUser") {
    try {
      //   localStorage.setItem("userName", JSON.stringify(formData.userName));
      localStorage.setItem("userName", JSON.stringify(values.userName));
      // return toast.success(`wellcome, ${formData.userName}`);
      return toast.success(`wellcome, ${values.userName}`);
      // throw new Error("ya done");
    } catch (error) {
      throw new Error("There was a problem creating your account.");
    }
  }

  // eğer action
  if (_action === "createBudget") {
    try {
      // create budget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created");
    } catch (error) {
      throw new Error("There was a problem creating your budget!");
    }
  }

  // add expense action
  if (_action === "createExpense") {
    try {
      // create exepnse
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created!`);
    } catch (error) {
      throw new Error("There was a problem creating your expense!");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="gird-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personel Budgeting is the secret to financial freedom</p>
                <p>Create a budget to get started!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
