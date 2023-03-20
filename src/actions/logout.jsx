import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName",
  });
  // delete the budget
  deleteItem({
    key: "budgets",
  });
  // delete the expenses
  deleteItem({
    key: "expenses",
  });
  toast.success("you've deleted your account!");
  // return redirect
  return redirect("/");
}
