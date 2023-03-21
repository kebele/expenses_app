// react router 6.8 ve sonrasının bir çok özelliği var tama işleyiş aşağıdaki gibi

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import Main, { mainLoader } from "./layouts/Main";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
// actions
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";
// library
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <h1>Hi</h1>,
    // loader: <Loader  />,
    // action: <Action  />,
    // errorElement: <Error  />
    // bir çok özelliği var
    // element: <Dashboard />,
    element: <Main />,
    // loader: dashboardLoader,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader, // sayfaya gidecek verileri hazırlıyor,
        errorElement: <Error />,
        action: dashboardAction,
      },
      {
        path: "/expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        // budget'a tıklayınca o budget'a ait expense'lerin old. sayfaya gitsin
        path: "/budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "/about",
        element: <p>about</p>,
      },
      {
        path: "/logout",
        // element: <p>logged out!</p>,
        // bir action istiyorsak bu route'a geldiğinde, ayrı bir actions folder'ı içine bunu tanımlamamız lazım
        action: logoutAction,
      },
    ],
  },
  // {
  // herhangibir olmayan route'a giteye çalışırsa o zamanda Error page gelsin
  //   path: "*",
  //   element: <Error />,
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
