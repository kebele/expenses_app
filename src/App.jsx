// react router 6.8 ve sonrasının bir çok özelliği var tama işleyiş aşağıdaki gibi
//

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <h1>Hi</h1>,
    // loader: <Loader  />,
    // action: <Action  />,
    // errorElement: <Error  />
    // bir çok özelliği var
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />,
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
    </div>
  );
}

export default App;
