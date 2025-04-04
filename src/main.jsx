import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import TodoList from "./components/todo/TodoList.jsx";
import Counter from "./components/counter/Counter.jsx";
import BudgetTracker from "./components/laith-budget-tracker/BudgetTracker.jsx";
import CrowdFunding from "./components/crowdfunding/CrowdFunding.jsx";
import ExcuseGenerator from "./components/excuses/ExcuseGenerator.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<TodoList />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/budget-tracker" element={<BudgetTracker />} />
      <Route path="/crowdfunding" element={<CrowdFunding />} />
      <Route path="/excuse-generator" element={<ExcuseGenerator />} />
      <Route
        path="*"
        element={
          <h1 className="text-3xl my-8 text-center font-semibold">
            Nothing to see here, use the menu above to navigate
          </h1>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
