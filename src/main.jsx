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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<TodoList />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/budget-tracker" element={<BudgetTracker />} />
      <Route path="/crowdfunding" element={<CrowdFunding />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
